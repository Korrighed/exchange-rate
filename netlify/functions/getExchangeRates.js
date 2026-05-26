exports.handler = async (event, context) => {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY;
  const baseCurrency = event.queryStringParameters?.currency || 'XPF';

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
    );
    if (!response.ok) throw new Error('API error');
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
