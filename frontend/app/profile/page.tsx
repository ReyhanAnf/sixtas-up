import SkeletonPage from "../skeleon";
import MyProfile from "../ui/profile/myprofile";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%]'>
          <Suspense fallback={<SkeletonPage />}>
            <MyProfile />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

