export default async function getUserProfile(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const res_user = await (await fetch(`${baseUrl}profiles`, { cache: 'no-store' })).json();
 
  return res_user;
}
