'use client';
import LoginForm from "./ui/auth/login-form";
import { getTokenData } from "./lib/authContext";
import { useLayoutEffect, useState } from "react";
import { refreshToken } from "./lib/authContext";

export default function Home() {
  const data = getTokenData() && JSON.parse(getTokenData());
  const nowDate = new Date().getTime() / 1000;
  const [isExpired, setIsExpired] = useState(true)

  useLayoutEffect(() => {
    setIsExpired(!isExpired);
    console.log('cek')
  }, []);


  return (
    <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
      <div className='w-full mt-10 m-0 lg:w-[60%] lg:scale-75'>
        {isExpired ? (
          <LoginForm />
        ) :
          (
            <p>Anda Sudah Login</p>
          )
        }
      </div>
    </div>
  )
}
