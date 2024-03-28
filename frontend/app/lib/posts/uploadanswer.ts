'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function uploadAnswer(dataform: FormData, postId: string) {
  const cookie = cookies();
  const user = cookie.get('userToken');
  const access = cookie.get("accessToken");
  const req = {
    "up": 0,
    "down": 0,
    "content": dataform.get("contentanswer"),
    "post": postId,
    "user": user?.value
};

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
  // console.log(dataform.get('image'));
   
  
  const res = await axios.post(`${BASE_URL}/answers/`, req, auth)
  .then((response)=>{
    console.log("upload-answer : " , response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

}