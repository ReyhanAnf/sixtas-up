
export default async function getDataPost(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const res_post = await (await fetch(`${baseUrl}posts`, { cache: 'no-store' })).json();
  // const res_answer = await (await fetch(`${baseUrl}answers`, { cache: 'no-store' })).json();
  // const res_reply = await (await fetch(`${baseUrl}replies`, { cache: 'no-store' })).json();
  // const res_user = await (await fetch(`${baseUrl}users`, { cache: 'no-store' })).json();

  return res_post;
}
