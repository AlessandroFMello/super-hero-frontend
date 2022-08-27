export default async function apiDelete(endpoint: string) {
  const URL = `https://alessandro-super-hero-backend.herokuapp.com/${endpoint}`;

  const request = await fetch(URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'},
  });

  const response = await request.json();

  return response;
}
