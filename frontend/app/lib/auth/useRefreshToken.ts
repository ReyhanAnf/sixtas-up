import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
// import { getTokenData } from "./authContext";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

export default function useRefreshToken() {
  const storage = localStorage

  useEffect(() => {
    console.log("cek")
  }, [storage]);

  // const gorefreshToken = async () => { 
  //   const dataToken = JSON.parse(JSON.stringify(getTokenData()));
  //   const tokenRefresh = localStorage.getItem('refresh');
  //   const expiredDate = dataToken.exp;
  //   const dateNow = new Date().getTime() / 1000;
  
  //   if (dateNow >= expiredDate){
  //     const response = await axios.post(`${baseUrl}token/refresh/`, {refresh: tokenRefresh})
  //     .then(function (response) {
  //       let token = response.data;
  //       let datatoken = JSON.stringify(jwtDecode(response.data.access?.toString() || ''));
        
  //       localStorage.setItem('access', token.access.toString());
  //       localStorage.setItem('refresh', token.refresh.toString());
  //       localStorage.setItem('tokendata', datatoken);
  //     })
  //     .catch(function (error) {
  //       console.log('kesalahan token error',error);
  //     });
  
  //     return response;
  //   }else if(dateNow < expiredDate){
  //     console.log('masih ada waktu');
  //   }
  // }
}