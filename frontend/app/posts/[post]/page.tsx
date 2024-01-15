'use client';
import { usePathname } from 'next/navigation';
import OnePost from '@/app/ui/posts/onePost';
// import CardPost from '@/app/ui/posts/postCard';


export default function Page() {

  const path = usePathname();
  const pathpost = path.split('/')[2];


  return (
    <main>
      Halo Gesya - {pathpost}

      <OnePost id={pathpost} />

      {/* <CardPost /> */}
    </main>
  )
}
