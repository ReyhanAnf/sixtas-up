import { headers } from 'next/headers';
import axios from 'axios';

export default async function getAnswer(){
  const baseUrl = 'http://127.0.0.1:8000/api/';
  // const headers =  {headers:{
  //   Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1NDk2ODAwLCJpYXQiOjE3MDU0OTYyMDAsImp0aSI6Ijg4MzU0NGE0OGU1NDQ4MTBhZmMzZDcxZDkxMTg1ZDVkIiwidXNlcl9pZCI6MiwidXNlciI6IjIxMjIxMDA5MiJ9.UaZJ208iiv7ri8nufQ_rRRXed4bGrjNoExao-NfuHL8'
  // }};
  const res_user = await axios.get(`${baseUrl}answers`)

  // const authorization = headers().get('authorization')
  // const baseUrl = 'http://127.0.0.1:8000/api/';
  // const res_user = await (await fetch(`${baseUrl}answers`, 
  //                             { 
  //                               cache: 'no-store' ,
  //                               headers:  { authorization },
  //                             })).json();
 
  return res_user;
}