'use server';
import { cookies } from "next/headers";


export async function getAuthDataProfile(){
  const cookie = cookies();
  const user = cookie.get("userToken");
  const access = cookie.get("accessToken");
  const options = {
    method: 'GET',
    headers: {
      'Authorization' : `Bearer ${access}`
    },
    
  }

  const res_post = await fetch(`${process.env.BASE_URL}profiles/${user}`, options)
 
  return res_post.json();
}