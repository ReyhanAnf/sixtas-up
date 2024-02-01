import axios from "axios";


export default async function getAuthDataProfile(){
  const user = localStorage.getItem('userToken');
  const access = localStorage.getItem('accessToken');
  console.log(user);

  const optionsPost = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      'Authorization': 'Bearer ' + access
    },
  }

  const res = await fetch('http://179.169.0.253:8000/api/profiles');
  console.log(res.json());

 

  return 'success';
}