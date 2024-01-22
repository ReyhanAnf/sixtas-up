'use client'

import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { FormEvent, useEffect, useState } from 'react';

const baseUrl = 'http://127.0.0.1:8000/api/';


export default async function loginUser(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  
  const formData = new FormData(event.currentTarget);
  const response = await axios.post(`${baseUrl}token/`, formData)
  .then(function (response) {
      let token = response.data;
      let datatoken = JSON.stringify(jwtDecode(response.data.access?.toString() || ''));
      localStorage.setItem('access', token.access.toString());
      localStorage.setItem('refresh', token.refresh.toString());
      localStorage.setItem('tokendata', datatoken);
      return {token: token, dataToken: datatoken}
    })
    .catch(function (error) {
      console.log('error',error);
    });


  return response;
}





  export const getTokenData = () => {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('tokendata');
      const objdata = JSON.parse(JSON.stringify(data));
    
    return objdata;
  } else if (typeof sessionStorage !== 'undefined') {
    // Fallback to sessionStorage if localStorage is not supported
    const data = sessionStorage.getItem('tokendata');
    const objdata = JSON.parse(JSON.stringify(data));
    
    return objdata;
  } else {
    // If neither localStorage nor sessionStorage is supported
    console.log('Web Storage is not supported in this environment.');
  }
}