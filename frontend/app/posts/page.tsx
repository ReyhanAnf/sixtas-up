import { Suspense } from "react"
import CardPost from "../ui/posts/postCard"

export default function Page() {
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
