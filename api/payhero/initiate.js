// PayHero STK Push API - Hardcoded for surveyspay.co.ke
const PAYHERO_API_URL = 'https://backend.payhero.co.ke/api/v2/payments';
const PAYHERO_AUTH_TOKEN = 'Basic VUlUdTQ0cnNZSVoxTTh3bUZlb0c6Uk9xbkl4cmdFSnVJYTFzVmRGSTJXUUo5cUszTFZpRnRub1RONUJxQw==';
const PAYHERO_CHANNEL_ID = 6637;
const CALLBACK_URL = 'https://www.surveyspay.co.ke/api/payhero/callback';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phone_number, amount, reference, description, user_id, category_id } = req.body;
    
    if (!phone_number || !amount) {
      return res.status(400).json({ error: 'Phone number and amount are required' });
    }

    // Format phone number
    let cleaned = phone_number.replace(/\D/g, '');
    if (cleaned.startsWith('0')) cleaned = '254' + cleaned.substring(1);
    if (cleaned.startsWith('+')) cleaned = cleaned.substring(1);
    if (!cleaned.startsWith('254')) cleaned = '254' + cleaned;

    const externalReference = reference || `JZA${Date.now()}`;

    // Call PayHero API with hardcoded callback URL
    const response = await fetch(PAYHERO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': PAYHERO_AUTH_TOKEN,
      },
      body: JSON.stringify({
        amount: Math.round(amount),
        phone_number: cleaned,
        channel_id: PAYHERO_CHANNEL_ID,
        provider: 'm-pesa',
        external_reference: externalReference,
        customer_name: '',
        callback_url: CALLBACK_URL,
      }),
    });

    const data = await response.json().catch(() => null);
    console.log('PayHero response:', data);

    if (!response.ok || !data) {
      return res.status(response.status || 500).json({
        success: false,
        error: data?.message || 'Failed to initiate payment',
      });
    }

    // Return success response
    return res.status(200).json({
      success: true,
      checkoutRequestId: data?.CheckoutRequestID || data?.reference,
      reference: externalReference,
      status: data?.status,
    });
  } catch (error) {
    console.error('PayHero STK Push Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}
