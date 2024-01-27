// 'use server';

import { jwtDecode } from 'jwt-decode';
// import { cookies } from 'next/headers';


// export default async function loginUser(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   console.log(formData)
// }


export default async function loginUser(dataform: FormData) {
  const req = {
    'username': dataform.get('username'),
    'password': dataform.get('password'),
  };
  const optionsPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  }
  
  const res = await fetch(`http://179.169.0.253:8000/api/token/`, optionsPost);
  
  if (res.ok) {
    // const cookie = cookies();
    const data = await res.json();
    const datatoken = JSON.parse(JSON.stringify(jwtDecode(data.access)));

    console.log(data)

    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);
    localStorage.setItem('userToken', datatoken.user);
    localStorage.setItem('expiredToken', datatoken.exp);
    localStorage.setItem('startToken', datatoken.iat);
    
  }else{
    localStorage.clear();
    console.log('masih pake yang lama');
  }

  return res.status
}

