'use client';
 
import { usePathname } from 'next/navigation';
import data_post from "@/app/lib/postdata";

export default function Home() {
  const path = usePathname();
  const pathpost = path.split('/')[2];
  
  function getPost(data: any[], pathpost: string) {
    const post = data.filter(x => x.post_id == pathpost)[0];

    return post
  }
  
  console.log(data_post)
  
  //console.log(getPost(data_post, pathpost))
  
  return (
    <main>
      Halo Gesya - {pathpost}
    </main>
  )
}
