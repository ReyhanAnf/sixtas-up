
import axios from 'axios';

export default async function getDataPost(){
  const baseUrl = 'http://127.0.0.1:8000/api/';

  const res_user = await axios.get(`${baseUrl}posts`, {headers: {'Access-Control-Allow-Origin' : '*'}})
 
  return res_user.data;
}