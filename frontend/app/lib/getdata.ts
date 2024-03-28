import axios from "axios";
import { BASE_URL } from "./url";


export default async function getDataPost(){
  const res_post = await axios.get(`${BASE_URL}/posts/?ordering=-post_at`)
  return res_post;
}


export async function getOnePost(id: string){
  const res_post = await axios.get(`${BASE_URL}/posts/${id}/`);
  return res_post;
}

export async function getMyPost(id: string){
  const res_post = await axios.get(`${BASE_URL}/posts/?author=${id}`);
  return res_post;
}



export async function getAnswerPost(postId: string){
  const res_post = await axios.get(`${BASE_URL}/answers/?post=${postId}`);
  return res_post;
}

export async function getReplyPost(answerId: string){
  const res_post = await axios.get(`${BASE_URL}/reply/?answer=${answerId}`);
  return res_post;
}



export async function getDataProfile(search: string){
  if(search == "all"){
    const res_post = await axios.get(`${BASE_URL}/profiles/`);
    return res_post;
  }else if(search){
    const res_post = await axios.get(`${BASE_URL}/profiles/${search}/`);
    return res_post;
  }else{
    const res_post = await axios.get(`${BASE_URL}/profiles/`);
    return res_post;
  }
}

export async function getUser(nis: string){
  if(nis == "all"){
    const res_post = await axios.get(`${BASE_URL}/users/`);
    return res_post;
  }else if(nis){
    const res_post = await axios.get(`${BASE_URL}/users/?search=${nis}`);
    return res_post;
  }else{
    const res_post = await axios.get(`${BASE_URL}/users/`);
    return res_post;
  }
}

export async function getAuthDataProfile(){

  const res_post = await fetch(`${BASE_URL}/profiles`, { cache: 'force-cache' })
 
  return res_post.json();
}