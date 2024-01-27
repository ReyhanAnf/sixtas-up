import axios from "axios";

export default async function getAuthDataProfile(){
  const user = localStorage.getItem('userToken');
  const access = localStorage.getItem('accessToken');
  console.log(user);
  const headers = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Credentials':true,
      "Authorization" : `Bearer ${access}`,
    }
    
  }

  const res_post = await axios.get(`http://179.169.0.253:8000/api/profiles/${user}`, headers)
 
  return res_post.data;
}