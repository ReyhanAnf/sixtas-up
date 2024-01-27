'use server';
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";


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
    console.log(refreshToken);
    
    
    if (Date.now()/1000 >= exp) {
      //jika expired
      // cek refresh token
      const req = {
        'refresh': refreshToken,
      };
      const optionsPost = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      }
      
      const res = await fetch(`${process.env.BASE_URL}token/refresh/`, optionsPost)
      
      if (res.ok) {
        const data = await res.json();
        const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));
    
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        localStorage.setItem('userToken', datatoken.user);
        localStorage.setItem('expiredToken', datatoken.exp);
        localStorage.setItem('startToken', datatoken.iat);
        
      }else if (res.status >= 400 || res.status < 500){
        // bad request
        // cookie.delete('accessToken');
        // cookie.delete('refreshToken');
        // cookie.delete('userToken');
        // cookie.delete('expiredToken');
        // cookie.delete('startToken');
        localStorage.clear();
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