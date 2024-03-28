'use client'
import { FormEvent, useState } from "react";
import { Input } from "@nextui-org/react";
import loginUser from "@/app/lib/auth/authLogin";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { getCookies } from "cookies-next";


export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const authCookie = getCookies();
  // const rout = useRouter();

  const [stat, useStat] = useState("hidden");
  const toggleVisibility = () => setIsVisible(!isVisible);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    loginUser(formData);
    useStat("block");
    const inter = setInterval(() => {
      useStat("hidden");
      clearInterval(inter);
    }, 4000)
  }



  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      {authCookie.userToken == undefined ? (
        <><div className="relative flex flex-col mx-3 rounded-xl bg-slate-600 bg-opacity-25 bg-clip-border text-gray-300 shadow-md p-5">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-500">
            Sign In
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Masuk Untuk Gunakan Fitur Lebih Luas!
          </p>
          <p id="statt" className={`mt-1 font-sans text-sm font-normal leading-relaxed text-blue-500 antialiased ${stat}`}>
            {authCookie.statusAuth == "401" ? "username atau kata sandi salah" : authCookie.statusAuth == "200" ? "Selamat Datang" : " "}
          </p>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method='post' onSubmit={submitHandler}>
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <Input
                  key='username'
                  variant="bordered"
                  type="text"
                  label="username"
                  name="username"
                  labelPlacement='outside' />

              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <Input
                  label="password"
                  variant="bordered"
                  placeholder="Enter your password"
                  endContent={<button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <Image
                        className="rounded-full fill-gray-900 shadow-xl"
                        src="/view-dark.svg"
                        alt="answer button"
                        width={26}
                        height={26} />
                    ) : (
                      <Image
                        className="rounded-full fill-gray-900 shadow-xl"
                        src="/view-light.svg"
                        alt="answer button"
                        width={26}
                        height={26} />

                    )}
                  </button>}
                  type={isVisible ? "text" : "password"}
                  name="password" />

              </div>
            </div>
            <button
              type="submit"
              className="mt-6 block w-full select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white hover:scale-105 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"

            >
              Sign In
            </button>

          </form>

        </div><div className="flex flex-row items-center justify-between my-1">
            <p>Belum Punya Akun ??</p>
            <Link
              href="/auth/register"
              className="mx-2 scale-95 bg-cyan-500 rounded-md py-1 px-3 text-slate-800 "
            >
              Register
            </Link>
          </div></>
      ) : (
        <>
          <div>
            Kamu Sudah Login
          </div>
          <Link href='../../' className="mx-2 scale-95 bg-cyan-500 rounded-md py-1 px-3 text-slate-800 ">Beranda</Link>
        </>
      )}
    </div>
  )
}

