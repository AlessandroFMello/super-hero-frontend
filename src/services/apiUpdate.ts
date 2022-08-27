export default async function apiUpdate(data: object, endpoint: string) {
  const URL = `https://alessandro-super-hero-backend.herokuapp.com/${endpoint}`;

  const request = await fetch(URL, {
    method: 'PUT',
    body: JSON.stringify({ ...data }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const response = await request.json();

  return response;
}
