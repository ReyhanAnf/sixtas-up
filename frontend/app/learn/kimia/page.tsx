import SkeletonPage from "../../skeleon";
import AnionKation from "@/app/ui/learn/kimia/anionkation";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%]'>
          <Suspense fallback={<SkeletonPage />}>
            <AnionKation />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

