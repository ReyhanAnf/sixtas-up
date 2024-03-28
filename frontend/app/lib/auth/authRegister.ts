'use server';
import axios from "axios";
import { REG_URL } from "../url";
import { cookies } from "next/headers";

export default async function registerUser(dataform: FormData) {
  const cookie = cookies();
  const req = {
    'username': dataform.get('username'),
    'fullname': dataform.get('fullname'),
    'shortname': dataform.get('shortname'),
    'password': dataform.get('password'),
    're_password': dataform.get('re_password'),
  };
  
  const res = await axios.post(`${REG_URL}`, req)
  .then((response)=>{
    cookie.set('registerStatus', `Sukses:Selamat-Datang!Login-Sekarang!`);
  })
  .catch((error)=>{
    cookie.set('registerStatus',`Error:Username-sudah-terdaftar`);
  });
  

}
