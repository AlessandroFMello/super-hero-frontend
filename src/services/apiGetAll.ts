export default async function apiGetAll(endpoint: string) {
  try {
    const URL = `https://alessandro-super-hero-backend.herokuapp.com${endpoint}`;
    const request = await fetch(URL);
    const response = await request.json();
    
    return response;
  } catch (error) {
    console.log(error);    
    return Promise.reject(error);
  }
}