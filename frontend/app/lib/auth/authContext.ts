'use client'

import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { FormEvent, useEffect, useState } from 'react';

const baseUrl = 'http://127.0.0.1:8000/api/';


export default async function loginUser(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await axios.post(`http://127.0.0.1:8000/api/token/`, formData)
      .then(function (response) {
        let token = JSON.parse(JSON.stringify(response.data));
        let datatoken = JSON.parse(JSON.stringify(jwtDecode(response.data.access?.toString() || '')));
        localStorage.setItem('accessToken', token.access);
        localStorage.setItem('refreshToken', token.refresh);
        localStorage.setItem('userToken', datatoken.user);
        localStorage.setItem('expiredToken', datatoken.exp);
        localStorage.setItem('startToken', datatoken.iat);
      })
      .catch(function (error) {
        console.log('error', error);
      });
}



