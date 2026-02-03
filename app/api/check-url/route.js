export async function POST(req) {
  const { url } = await req.json();

  const apiKey = process.env.IPQS_API_KEY; // Replace with your real API key
  const encodedUrl = encodeURIComponent(url);
  const apiUrl = `https://ipqualityscore.com/api/json/url/${apiKey}/${encodedUrl}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
