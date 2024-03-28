'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function updatePost(dataform: FormData, postId: string) {
  const cookie = cookies();
  const user = cookie.get('userToken');
  const access = cookie.get("accessToken");
  const req = {
    'content': dataform.get('content'),
    'tag': dataform.get('tag'),
    'author': user?.value,
    'like': 0,
  };

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.patch(`${BASE_URL}/posts/${postId}/`, req, auth)
  .then((response)=>{
    console.log("update-post", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  // const resu = await axios.patch(`${BASE_URL}/users/${user?.value}/`, requ, auth)
  // .then((response)=>{
  //   const data = response.data;
    
  //   console.log(data);
  // })
  // .catch((error)=>{
  //   console.log("erorrrrrrr", error);
  // });
  return res;
}
