const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const texts = body.text || [];
    if (!Array.isArray(texts) || texts.length === 0) {
      return { statusCode: 400, body: 'No text provided' };
    }
    const params = new URLSearchParams();
    texts.forEach((t) => params.append('text', t));
    params.append('target_lang', body.target_lang || 'EN');
    params.append('source_lang', body.source_lang || 'DE');
    params.append('auth_key', 'const API_KEY = process.env.DEEPL_API_KEY;');

    const res = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    const text = await res.text();
    return {
      statusCode: res.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ error: err?.message || 'Relay error' })
    };
  }
};
