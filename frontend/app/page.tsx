'use client';

import { useCookies } from 'next-client-cookies';

export default function Home() {
  const cookies = useCookies();
  console.log(cookies.get());

  return (
    <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
      <div className='w-full mt-10 m-0 lg:w-[60%] lg:scale-75'>

      </div>
    </div>
  )
}
