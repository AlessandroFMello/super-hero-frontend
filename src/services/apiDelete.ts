export default async function apiDelete(endpoint: string) {
  const URL = `https://alessandro-super-hero-backend.herokuapp.com${endpoint}`;

  const request = await fetch(URL, {
    method: 'DELETE',
  });

  console.log(request);
  return request;
}
