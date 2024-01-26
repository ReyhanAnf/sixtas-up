
import axios from 'axios';
export default async function getUserProfile(){
  const res_user = await axios.get(`${process.env.BASE_URL}profiles`)
   
  return res_user.data;
}
