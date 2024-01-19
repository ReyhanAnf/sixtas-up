import { headers } from 'next/headers';
import axios from 'axios';
import { cookies } from 'next/headers';

export default async function getAnswer(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const accessToken = cookies().get('accesstoken')?.value;
  const headers =  {headers:{
    Authorization: 'Bearer ' + accessToken
  }};
  const res_user = await axios.get(`${baseUrl}answers`, headers)

  // const authorization = headers().get('authorization')
  // const baseUrl = 'http://127.0.0.1:8000/api/';
  // const res_user = await (await fetch(`${baseUrl}answers`, 
  //                             { 
  //                               cache: 'no-store' ,
  //                               headers:  { authorization },
  //                             })).json();
 
  return res_user;
}