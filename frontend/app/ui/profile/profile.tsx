import Image from "next/image"
import { Button, Divider, Textarea } from "@nextui-org/react"
import CardPost from "../posts/postCards"


export default function Profile() {
  return (
    <div className="flex flex-col ">
      <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-slate-200 backdrop-blur-md bg-opacity-10 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <Image
            src="/banner_default.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
            alt="banner"
            width={200}
            height={100}
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-cyan-400 dark:!border-navy-700">
            <Image
              className="rounded-full transition-transform"
              src="/profile_default.gif"
              alt="profile logo"
              width={75}
              height={75}
              priority
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            Adela Parkson
          </h4>
          <h6 className="text-sm font-mono text-gray-600">212210092</h6>
          <div className="flex flex-col items-center p-2 my-1">
            <Textarea
              isDisabled
              label=""
              labelPlacement="outside"
              placeholder="Enter your description"
              defaultValue="lowercase"
              className="w-full font-mono"
            />
            <p className="text-sm font-mono text-gray-400 my-1">XII IPA 3</p>
            <p className="text-sm font-mono text-gray-400 my-1">Angkatan 36 / Eternals</p>
          </div>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">9.7K</p>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">434</p>
            <p className="text-sm font-normal text-gray-600">Following</p>
          </div>
        </div>
        <div className="flex gap-20 md:!gap-20 mt-6 mb-3">
          <Button variant="bordered" className="shadow-lg shadow-slate-800">Follow</Button>
          <Button variant="bordered" className="shadow-lg shadow-slate-800">Chat</Button>
        </div>
        <Divider />
        <div className="mypost flex flex-col">
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </div>
  )
}