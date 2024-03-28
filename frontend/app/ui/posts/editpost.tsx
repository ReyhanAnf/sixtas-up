"use client";

import registerUser from "@/app/lib/auth/authRegister";
import { Input, Image, Textarea } from "@nextui-org/react";
import { getCookies } from "cookies-next";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { getOnePost } from "@/app/lib/getdata";
import { useParams, usePathname, useRouter } from "next/navigation";
import updatePost from "@/app/lib/updates/updatepost";

export default async function EditPost() {
  const param = useParams();
  const pathname = usePathname();
  const rout = useRouter();
  const usecookie = getCookies();
  if (usecookie.userToken === undefined) {
    rout.replace("/")
  }
  const post = (await getOnePost(param.post.toString())).data;
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    updatePost(formData, post.post_id);

    alert("Saved ✅");
    rout.back();
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <div className="relative flex flex-col mx-3 rounded-xl bg-slate-600 bg-opacity-25 bg-clip-border text-gray-300 shadow-md p-5">
        <Link href={'/'}>
          kembali
        </Link>
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-500">
          Posting
        </h4>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method='patch' onSubmit={submitHandler}>
          <div className="mb-4 flex flex-col gap-6">
            <div className=" h-11 mb-5 w-full min-w-[200px]">
              <Textarea
                key='content'
                variant="bordered"
                type="textarea"
                label="what's do you think?"
                name="content"
                labelPlacement='outside'
                defaultValue={post.content}
              />
            </div>
            <div className="h-11 mt-8 w-full min-w-[200px]">
              {/* <input
                type="file"
                name="image"
                key={"image"}
              /> */}

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
                defaultValue={post.tags}
              />

            </div>

          </div>
          <button
            type="submit"
            className="mt-6 block w-full select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white hover:scale-105 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Save
          </button>

        </form>

      </div>



    </div >
  );
}
