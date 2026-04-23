import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

// Hardcoded Supabase credentials
const SUPABASE_URL = 'https://zwjdfovixmbbxqpnlcdn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3amRmb3ZpeG1iYnhxcG5sY2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NDA3MTMsImV4cCI6MjA4OTMxNjcxM30.IiCDL7MgAHuW8J6FJ1pIRLIiMUcASi6V3nLCq2WQhYo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// PayHero API Configuration
const isProduction = import.meta.env.PROD;

export class MpesaService {
  static formatPhone(phone: string): string {
    let cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('0')) cleaned = '254' + cleaned.substring(1);
    if (cleaned.startsWith('+')) cleaned = cleaned.substring(1);
    if (!cleaned.startsWith('254')) cleaned = '254' + cleaned;
    return cleaned;
  }

  // PayHero STK Push
  static async initiateSTKPush(
    phoneNumber: string,
    amount: number,
    accountReference: string,
    transactionDesc: string,
    userId: string,
    categoryId: string
  ): Promise<{ success: boolean; checkoutRequestId?: string; error?: string }> {
    try {
      const formattedPhone = this.formatPhone(phoneNumber);
      const checkoutRequestId = `CR${Date.now()}${Math.random().toString(36).substr(2, 9)}`;

      // Create payment record - using checkout_request_id as the reference
      const { error: dbError } = await supabase.from('mpesa_payments').insert({
        user_id: userId,
        category_id: categoryId,
        amount,
        phone_number: formattedPhone,
        checkout_request_id: checkoutRequestId,
        merchant_request_id: checkoutRequestId, // Use same value for merchant_request_id
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      
      if (dbError) throw dbError;

      // Call PayHero API via our serverless function
      const url = '/api/payhero/initiate';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: formattedPhone,
          amount,
          reference: checkoutRequestId,
          description: transactionDesc,
          user_id: userId,
          category_id: categoryId,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        await supabase.from('mpesa_payments').update({
          status: 'failed',
          result_desc: data?.error || 'Payment initiation failed',
        }).eq('checkout_request_id', checkoutRequestId);
        
        return { success: false, error: data?.error || 'Failed to initiate payment' };
      }

      // Update with PayHero checkout ID if different
      if (data?.checkoutRequestId && data.checkoutRequestId !== checkoutRequestId) {
        await supabase.from('mpesa_payments').update({
          checkout_request_id: data.checkoutRequestId,
          status: 'processing',
        }).eq('checkout_request_id', checkoutRequestId);
      } else {
        await supabase.from('mpesa_payments').update({
          status: 'processing',
        }).eq('checkout_request_id', checkoutRequestId);
      }

      toast.success('STK Push sent! Check your phone and enter PIN.');
      
      return {
        success: true,
        checkoutRequestId: data?.checkoutRequestId || checkoutRequestId,
      };
    } catch (error: any) {
      console.error('PayHero STK Push Error:', error);
      return { success: false, error: error.message || 'Failed to initiate payment' };
    }
  }

  // Poll payment status (for fallback if callback fails)
  static async pollPaymentStatus(
    checkoutRequestId: string,
    userId: string,
    categoryId: string,
    onComplete: () => void,
    onFailed: () => void,
    maxAttempts: number = 30
  ) {
    let attempts = 0;
    
    const checkStatus = async () => {
      if (attempts >= maxAttempts) {
        onFailed();
        return;
      }
      attempts++;

      try {
        // Check payment status from database
        const { data: payment } = await supabase
          .from('mpesa_payments')
          .select('status, mpesa_receipt_number')
          .eq('checkout_request_id', checkoutRequestId)
          .single();

        if (payment?.status === 'completed') {
          onComplete();
          return;
        }

        if (payment?.status === 'failed') {
          onFailed();
          return;
        }

        setTimeout(checkStatus, 5000);
      } catch (error) {
        setTimeout(checkStatus, 5000);
      }
    };

    setTimeout(checkStatus, 5000);
  }
}

// Category definitions
export const SURVEY_CATEGORIES = [
  { id: 'starter', name: 'Free Starter', description: 'Complete free surveys and earn up to KSH 1,500', unlock_price: 0, earning_cap: 1500, surveys_available: 100, reward_per_survey: 150, icon: 'Gift', gradient: 'from-emerald-400 to-teal-600', is_free: true },
  { id: 'bronze_plus', name: 'Bronze Plus', description: 'Unlock surveys earning up to KSH 1,000 more', unlock_price: 150, earning_cap: 1000, surveys_available: 8, reward_per_survey: 125, icon: 'Zap', gradient: 'from-amber-600 to-orange-500', is_free: false },
  { id: 'silver_plus', name: 'Silver Plus', description: 'Unlock surveys earning up to KSH 2,500 more', unlock_price: 190, earning_cap: 2500, surveys_available: 15, reward_per_survey: 167, icon: 'Award', gradient: 'from-slate-400 to-slate-600', is_free: false },
  { id: 'gold_plus', name: 'Gold Plus', description: 'Unlock surveys earning up to KSH 3,000 more', unlock_price: 200, earning_cap: 3000, surveys_available: 15, reward_per_survey: 200, icon: 'Crown', gradient: 'from-yellow-400 to-yellow-600', is_free: false },
  { id: 'platinum_plus', name: 'Platinum Plus', description: 'Unlock surveys earning up to KSH 3,500 more', unlock_price: 250, earning_cap: 3500, surveys_available: 15, reward_per_survey: 234, icon: 'Gem', gradient: 'from-cyan-400 to-blue-600', is_free: false },
  { id: 'diamond_plus', name: 'Diamond Plus', description: 'Unlock surveys earning up to KSH 5,000 more', unlock_price: 300, earning_cap: 5000, surveys_available: 20, reward_per_survey: 250, icon: 'Diamond', gradient: 'from-violet-500 to-purple-700', is_free: false },
];
