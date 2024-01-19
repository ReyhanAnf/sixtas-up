import axios from 'axios';
import { cookies } from 'next/headers';
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';

export default async function contextAuth(){
  // APA SAJA YANG MENGGUNAKAN TOKEN
  // REFRESH TOKEN ( EXP, ROLLBACK )
  // AUTH-USER
  // POSTING POSTS
  // EDITING POSTS
  // POSTING ANSWER
  // EDITING ANSWER
  // POSTING REPLY
  // EDITING REPLY

  const baseUrl = 'http://127.0.0.1:8000/api/';
  const useCookies = cookies();
  const accessToken = useCookies.get('accesstoken')?.value;
  const refreshToken = useCookies.get('refreshtoken')?.value;
  const dataAccess = jwtDecode(accessToken?.toString() || '');

  const headers =  {headers:{
    Authorization: 'Bearer ' + accessToken
  }};

  const res_post = await axios.get(`${baseUrl}posts`, headers)
 
  return res_post.data;
}


export async function refreshing (rt: any) {
  const [arToken, setAr] = useState({});

  const response = await axios.post('http://localhost:8000/api/token/refresh/', {refresh: rt})
    .then(function (response) {
      setAr(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  return arToken;
}