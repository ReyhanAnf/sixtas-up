import { headers } from 'next/headers';
import axios from 'axios';

export default async function getUserProfile(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const res_user = await axios.get(`${baseUrl}profiles`)
   
  return res_user.data;
}
