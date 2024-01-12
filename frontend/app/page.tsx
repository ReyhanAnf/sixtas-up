import Image from 'next/image';
import CardPost from './ui/posts/postCard';
import Navbar from './ui/navigation/navbar';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <nav>
        <Navbar />  
      </nav>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75'>
          <Suspense fallback={<p className="my-28 flex justify-center items-center">Loading...</p>}>
            <CardPost />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
