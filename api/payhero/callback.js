// PayHero Payment Callback Handler - Hardcoded credentials
import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase credentials - using SERVICE ROLE key for RLS bypass
const SUPABASE_URL = 'https://zwjdfovixmbbxqpnlcdn.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3amRmb3ZpeG1iYnhxcG5sY2RuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mzc0MDcxMywiZXhwIjoyMDg5MzE2NzEzfQ.pYpwXsvivm7OiMEdkM0CNnieFQgKAGZiA_ti4UxE95c';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('PayHero callback received:', req.body);
    
    const { response, status, forward_url } = req.body;
    
    if (!response) {
      return res.status(400).json({ error: 'Invalid callback data' });
    }

    const {
      CheckoutRequestID,
      ExternalReference,
      MpesaReceiptNumber,
      Phone,
      ResultCode,
      ResultDesc,
      Status,
      Amount,
    } = response;

    const isSuccess = ResultCode === 0 && Status?.toLowerCase() === 'success';
    
    console.log('Processing payment:', CheckoutRequestID, 'Success:', isSuccess);

    // Update payment record in database using service role key
    const { error: updateError, data: updateData } = await supabase
      .from('mpesa_payments')
      .update({
        status: isSuccess ? 'completed' : 'failed',
        mpesa_receipt_number: MpesaReceiptNumber || null,
        result_code: ResultCode,
        result_desc: ResultDesc,
        updated_at: new Date().toISOString(),
      })
      .eq('checkout_request_id', CheckoutRequestID)
      .select();

    if (updateError) {
      console.error('Error updating payment:', updateError);
    } else {
      console.log('Payment updated successfully:', updateData);
    }

    // If payment successful, unlock category
    if (isSuccess) {
      // Get payment record to find user_id and category_id
      const { data: paymentRecord, error: paymentError } = await supabase
        .from('mpesa_payments')
        .select('user_id, category_id')
        .eq('checkout_request_id', CheckoutRequestID)
        .single();

      if (paymentError) {
        console.error('Error finding payment for unlock:', paymentError);
      }

      if (paymentRecord) {
        const { user_id, category_id } = paymentRecord;
        console.log('Unlocking category for user:', user_id, 'category:', category_id);
        
        // Unlock category for user
        const { error: unlockError, data: unlockData } = await supabase
          .from('user_category_unlocks')
          .upsert({
            user_id: user_id,
            category_id: category_id,
            payment_status: 'completed',
            mpesa_checkout_request_id: CheckoutRequestID,
            unlocked_at: new Date().toISOString(),
            total_earned_in_category: 0,
            surveys_completed_in_category: 0,
          }, { onConflict: 'user_id,category_id' })
          .select();

        if (unlockError) {
          console.error('Error unlocking category:', unlockError);
        } else {
          console.log('Category unlocked successfully:', unlockData);
        }
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Callback processed',
      status: isSuccess ? 'completed' : 'failed',
    });
  } catch (error) {
    console.error('PayHero Callback Error:', error);
    return res.status(200).json({
      success: true,
      message: 'Callback received (with errors)',
    });
  }
}
