import CardPost from '@/app/ui/posts/postCard';
import { Suspense } from "react"


export default function Page() {
  // const path = usePathname();
  // const pathpost = path.split('/')[2];
  // const cookie = useCookies();
  // cookie.set('postCurrent', pathpost);
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75'>
          <Suspense fallback={<p className="my-28 flex justify-center items-center">Loading...</p>}>
            <CardPost />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
