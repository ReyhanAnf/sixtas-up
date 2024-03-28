import { Suspense } from "react";
import UploadPost from "@/app/ui/posts/uploadPost";
import SkeletonPage from "@/app/skeleon";

export default function Page() {
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75'>
          Upload Post
          <Suspense fallback={<SkeletonPage />}>
            <UploadPost />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
