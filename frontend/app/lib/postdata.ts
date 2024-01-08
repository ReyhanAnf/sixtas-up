
export default async function getDataPost(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const res_post = await (await fetch(`${baseUrl}posts`, { cache: 'no-store' })).json();
  
  return res_post;
}

