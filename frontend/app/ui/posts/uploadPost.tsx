"use client";

import { Input, Image, Textarea } from "@nextui-org/react";
import Link from "next/link";
import { FormEvent } from "react";
import uploadPost from "@/app/lib/posts/uploadpost";
import { useRouter } from "next/navigation";

export default function UploadPost() {
  const rout = useRouter();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    uploadPost(formData);
    alert("success!✅");
    rout.back();
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col dark:text-white text-slate-900">
      <div className="relative flex flex-col mx-3 rounded-xl bg-slate-600 bg-opacity-25 bg-clip-border text-gray-300 shadow-md p-5">
        <Link href={'/'}>
          <Image
            className="rounded-full fill-slate-400 shadow-xl"
            src="/back.svg"
            alt="back button"
            width={30}
            height={30}
          />
        </Link>
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-500">
          Posting
        </h4>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method='post' onSubmit={submitHandler}>
          <div className="mb-4 flex flex-col gap-6">
            <div className=" h-11 mb-5 w-full min-w-[200px]">
              <Textarea
                key='content'
                variant="bordered"
                type="textarea"
                label="what's do you think?"
                name="content"
                labelPlacement='outside'
              />
            </div>
            <div className="h-11 mt-8 w-full min-w-[200px]">
              <input
                type="file"
                name="image"
                key={"image"}
              />

            </div>
            <div className=" h-11 w-full min-w-[200px]">
              <Input
                key='tag'
                variant="bordered"
                type="text"
                label="Tag"
                name="tag"
                labelPlacement='outside'
                placeholder="#belajar #share #ask ..."
              />

            </div>

          </div>
          <button
            type="submit"
            className="mt-6 block w-full select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white hover:scale-105 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Post
          </button>
        </form>
      </div>
    </div >
  );
}
