import axios from "axios";
import { BASE_URL } from "../url";
import { getCookies } from "cookies-next";


export default async function getAuthDataProfile(){
  const cookie = getCookies();
  const user = cookie.userToken;
  // const access = cookie.accessToken;
  

  // const optionsPost = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     "Access-Control-Allow-Origin": "*",
  //     'Authorization': 'Bearer ' + access
  //   },
  // }

  const res = await axios.get(`${BASE_URL}/profiles/${user}/`);

  return res;
}