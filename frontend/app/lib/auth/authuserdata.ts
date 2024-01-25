import axios from 'axios';

export default async function getUserAuthProfile(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  
  const res_user = await axios.get(`${baseUrl}profiles/${auth}`)
  
  console.log(res_user)
  return res_user.data;
}