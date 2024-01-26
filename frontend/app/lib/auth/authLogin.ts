'use server';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';


// export default async function loginUser(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   console.log(formData)
// }


export default async function loginUser(req: object) {
  const optionsPost = {
    method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(req),
                      }
  
  const res = await fetch(`http://179.169.0.253:8000/api/token/`, optionsPost)
  
  if (res.ok) {
    const cookie = cookies();
    const data = await res.json();
    const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));

    cookie.set('accessToken', data.access);
    cookie.set('refreshToken', data.refresh);
    cookie.set('userToken', datatoken.user);
    cookie.set('expiredToken', datatoken.exp);
    cookie.set('startToken', datatoken.iat);
    
  }

  return res.status
}

