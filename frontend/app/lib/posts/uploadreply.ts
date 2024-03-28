'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function uploadReply(dataform: FormData, answerId: string) {
  const cookie = cookies();
  const user = cookie.get('userToken');
  const access = cookie.get("accessToken");
  const req = {
    "content": dataform.get("contentreply"),
    "answer": answerId,
    "user": user?.value
};

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
  // console.log(dataform.get('image'));
   
  
  const res = await axios.post(`${BASE_URL}/replies/`, req, auth)
  .then((response)=>{
    console.log("upload-reply", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);

  });

}