'use client';
 
import { useRouter } from 'next/navigation';
 
const Post = () => {
  const { query } = useRouter()
 
  return (
    <div>{query.post}</div>
  )
}

export default Post;