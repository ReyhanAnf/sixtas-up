import { Suspense } from "react"
import CardPost from "../ui/posts/postCards"
import SkeletonPage from "../skeleon"

export default function Page() {
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75'>
          <Suspense fallback={<SkeletonPage />}>
            <CardPost />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
