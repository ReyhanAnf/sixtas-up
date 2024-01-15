
export default async function getDataPost(props: { id: string; }){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  let res_post = await (await fetch(`${baseUrl}posts`, { cache: 'no-store' })).json();
  
  if (props.id == "all"){
    return res_post;
  }else{
    res_post = res_post.filter(x => x.post.post_id == props.id);
    return res_post;
  }
}
