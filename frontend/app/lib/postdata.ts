
import axios from 'axios';
import { cookies } from 'next/headers';
import { jwtDecode } from "jwt-decode";

export default async function getDataPost(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const useCookies = cookies();

  const accessToken = useCookies.get('accesstoken')?.value;
  const refreshToken = useCookies.get('refreshtoken')?.value;
  const headers =  {headers:{
    Authorization: 'Bearer ' + accessToken
  }};

  const decodejwt = jwtDecode(accessToken?.toString());
  console.log(decodejwt);


  const res_post = await axios.get(`${baseUrl}posts`, headers)
 
  return res_post.data;
}