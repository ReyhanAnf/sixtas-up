
export default async function getDataPost(){

  const res_post = await fetch(`${process.env.BASE_URL}posts`, { cache: 'force-cache' })
 
  return res_post.json();
}

export async function getOnePost(id: string){

  const res_post = await fetch(`${process.env.BASE_URL}posts/${id}`, { cache: 'force-cache' })
 
  return res_post.json();
}

export async function getDataProfile(){

  const res_post = await fetch(`${process.env.BASE_URL}profiles`, { cache: 'force-cache' })
 
  return res_post.json();
}