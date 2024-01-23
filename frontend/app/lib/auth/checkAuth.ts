'use client';

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";


export default function checkAuth() {
  const user = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;
  const exp = Number(localStorage.getItem('expiredToken'));
  let isValid = false;
  let resRef = {};

  // Jika ada histori user maka cek apakah akses token user tersebut valid
  // jika valid maka jalankan fungsi refresh token dan sajikan lagi data nya
  // Jika tidak valid maka cek apakah refresh token juga masih valid
  //Jika Valid maka jalankan refresh token supaya bisa dapatkan akses token lagi
  //Jika tidak maka kembalika ke halaman login
  // Jika tidak ada maka login
  if (user) {
    const refreshToken = localStorage.getItem('refreshToken');
    
    
    if (Date.now()/1000 >= exp) {
      //jika expired
      // cek refresh token
      const getChange = async () => {
        const response = await axios.post(`http://127.0.0.1:8000/api/token/refresh/`, { refresh: refreshToken })
          .then(function (response) {
            let token = response.data;
            let datatoken = JSON.parse(JSON.stringify(jwtDecode(response.data.access?.toString() || '')));
            localStorage.setItem('accessToken', token.access);
            localStorage.setItem('refreshToken', token.refresh);
            localStorage.setItem('userToken', datatoken.user);
            localStorage.setItem('expiredToken', datatoken.exp);
            localStorage.setItem('startToken', datatoken.iat);
            isValid = true;
            console.log('token sudah diperbarui');
            return { token: token, dataToken: datatoken }
          })
          .catch(function (error) {
            console.log('error', error);
            isValid = false;
            localStorage.clear();
            return error.response.data
          });
        resRef = response;
      }
      getChange();
    } else {
      // jika tidak expired / valid
      // sajikan data
      isValid = true;
      console.log('token akses masih aman sampai', exp)

    }
    


  } else {
    // login
    isValid = false;
    console.log('tidak ada user')
  }

  return { 'isValid': isValid, 'response': resRef };
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