export async function POST(req: Request): Promise<Response> {
  const body = await req.json()
  const url = 'https://api.openai.com/v1/chat/completions'
  const headers = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }
  const res = await fetch(url, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(body),
  })
  const data = await res.json()
  // Check if the HTTP response is not successful
  if (!res.ok) {
    throw new Error(
      `Request failed, status code: ${res.status}, data: ${JSON.stringify(data)}`
    )
  }
  return Response.json(data)
}
