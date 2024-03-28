'use server';

import { cookies } from "next/headers";



export default async function logoutUser() {
  const cookie =cookies();
  // Jika ada histori user maka cek apakah akses token user tersebut valid
  // jika valid maka jalankan fungsi refresh token dan sajikan lagi data nya
  // Jika tidak valid maka cek apakah refresh token juga masih valid
  //Jika Valid maka jalankan refresh token supaya bisa dapatkan akses token lagi
  //Jika tidak maka kembalika ke halaman login
  // Jika tidak ada maka login
  if (cookie.has('accessToken')) {
    
    cookie.delete('accessToken');
    cookie.delete('refreshToken');
    cookie.delete('userToken');
    cookie.delete('expiredToken');
    cookie.delete('startToken');
    cookie.delete('registerStatus');

  } else {
    // login
    cookie.set('auth-message','nothing user')
  }

  return "success logout";
}
