'use server';
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { BASE_URL } from "../url";
import axios from "axios";


export default async function checkAuth() {
  const cookie = cookies();
  const user = cookie.get("userToken")?.value;
  const exp = Number(cookie.get("expiredToken")?.value);

  // Jika ada histori user maka cek apakah akses token user tersebut valid
  // jika valid maka jalankan fungsi refresh token dan sajikan lagi data nya
  // Jika tidak valid maka cek apakah refresh token juga masih valid
  //Jika Valid maka jalankan refresh token supaya bisa dapatkan akses token lagi
  //Jika tidak maka kembalika ke halaman login
  // Jika tidak ada maka login
  if (user) {
    const refreshToken = cookie.get('refreshToken')?.value;
    
    
    if (Date.now()/1000 >= exp) {
      //jika expired
      // cek refresh token
      const req = {
        'refresh': refreshToken,
      };
      
      const res = await axios.post(`${BASE_URL}/token/refresh/`, req);

      
      if (res.status >= 200 || res.status < 300) {
        const data = await res.data;
        const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));
    
        cookie.set('accessToken', data.access);
        cookie.set('refreshToken', data.refresh);
        cookie.set('userToken', datatoken.user);
        cookie.set('expiredToken', datatoken.exp);
        cookie.set('startToken', datatoken.iat);
        
      }else if (res.status >= 400 || res.status < 500){
        // bad request
        cookie.delete('accessToken');
        cookie.delete('refreshToken');
        cookie.delete('userToken');
        cookie.delete('expiredToken');
        cookie.delete('startToken');
        console.log('token tidak valid', res.status);
      }
    
      return res.status

    } else {
      // jika tidak expired / valid
      // sajikan data
      console.log('token akses masih aman sampai', exp)
    }
    
  } else {
    // login
    console.log('tidak ada user')
  }

  return user;
}


// {
//   "detail": "Given token not valid for any token type",
//   "code": "token_not_valid",
//   "messages": [
//     {
//       "token_class": "AccessToken",
//       "token_type": "access",
//       "message": "Token is invalid or expired"
//     }
//   ]
// }