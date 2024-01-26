'use client'
import { FormEvent, useState } from "react";
import { Input } from "@nextui-org/react";
import loginUser from "@/app/lib/auth/authLogin";
import Router from "next/router";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const req = {
      'username': formData.get('username'),
      'password': formData.get('password')
    }

    loginUser(req);
  }



  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex flex-col mx-3 rounded-xl bg-slate-700 bg-opacity-5 bg-clip-border text-gray-300 shadow-sm shadow-cyan-200 p-5">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sign In
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to Login.
        </p>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method='post' onSubmit={submitHandler}>
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <Input
                key='username'
                type="text"
                label="username"
                name="username"
                labelPlacement='outside'
              />

            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <div>a</div>
                    ) : (
                      <div>b</div>

                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
                name="password"
              />

            </div>
          </div>
          <button
            type="submit"
            className="mt-6 block w-full select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={() => {
              let inter = setInterval(() => {
                router.replace('/posts');
                clearInterval(inter);
              }, 100);
            }}
          >
            Sign In
          </button>

        </form>

      </div>



    </div>
  )
}

function dispatch(arg0: { type: string; value: any; }) {
  throw new Error("Function not implemented.");
}
