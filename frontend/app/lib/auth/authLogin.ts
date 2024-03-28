'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { jwtDecode } from 'jwt-decode';
import { cookies } from "next/headers";

export default async function loginUser(dataform: FormData) {
  const cookie = cookies();
  const req = {
    'username': dataform.get('username'),
    'password': dataform.get('password'),
  };
  
  const res = await axios.post(`${BASE_URL}/token/`, req)
  .then((response)=>{
    const data = response.data;
    const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));

    cookie.set('accessToken', data.access);
    cookie.set('refreshToken', data.refresh);
    cookie.set('userToken', datatoken.user);
    cookie.set('expiredToken', datatoken.exp);
    cookie.set('startToken', datatoken.iat);
    cookie.set('statusAuth', '200');
    cookie.set('messageAuth','Sukses Login');
    
  })
  .catch((error)=>{
    cookie.delete('accessToken');
    cookie.delete('refreshToken');
    cookie.delete('userToken');
    cookie.delete('expiredToken');
    cookie.delete('startToken');
    cookie.set('statusAuth', "401");
    cookie.set('messageAuth','Username atau Kata sandi salah');
  });
  
}

