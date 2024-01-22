'use client';

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FormEvent, useEffect, useState } from "react";


export default function LoginForm() {
  const [change, setChange] = useState('');
  const [exp, setExp] = useState(0);
  const [iat, setIat] = useState(0);

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await axios.post(`http://127.0.0.1:8000/api/token/`, formData)
      .then(function (response) {
        let token = JSON.parse(JSON.stringify(response.data));
        let datatoken = JSON.parse(JSON.stringify(jwtDecode(response.data.access?.toString() || '')));
        setChange(datatoken.jti);
        setExp(datatoken.exp);
        setIat(datatoken.iat);
        localStorage.setItem('accessToken', token.access);
        localStorage.setItem('refreshToken', token.refresh);
        localStorage.setItem('userToken', datatoken.user);
        localStorage.setItem('expiredToken', datatoken.exp);
        localStorage.setItem('startToken', datatoken.iat);
      })
      .catch(function (error) {
        console.log('error', error);
      });

    return response;
  }

  useEffect(() => {
    if (change != '' && Date.now() >= exp) {
      const interval = setInterval(() => {
        const response = axios.post(`http://127.0.0.1:8000/api/token/refresh/`, { refresh: localStorage.getItem('refreshToken') })
          .then(function (response) {
            let token = JSON.parse(JSON.stringify(response.data));
            let datatoken = JSON.parse(JSON.stringify(jwtDecode(response.data.access?.toString() || '')));
            setChange(datatoken.jti);
            setExp(datatoken.exp);
            setIat(datatoken.iat);
            localStorage.setItem('accessToken', token.access);
            localStorage.setItem('refreshToken', token.refresh);
            localStorage.setItem('userToken', datatoken.user);
            localStorage.setItem('expiredToken', datatoken.exp);
            localStorage.setItem('startToken', datatoken.iat);
          })
          .catch(function (error) {
            console.log('error', error);
          });
        console.log(exp * 1000 - Date.now());
        clearInterval(interval);
      }, 5000);
    }
  }, [change]);


  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex flex-col mx-3 rounded-xl bg-slate-700 bg-opacity-5 bg-clip-border text-gray-300 shadow-sm shadow-cyan-200 p-5">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sign In
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to Login.
        </p>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md  bg-transparent px-4 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="username"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:!border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                NIS
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                className="peer h-full w-full rounded-md  bg-transparent px-4 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="password"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:!border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
          </div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Sign In
          </button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Not have an account?
            <a
              className="font-semibold text-cyan-500 transition-colors hover:text-cyan-700"
              href="#"
            >
              Register
            </a>
          </p>
        </form>
        <div className="w-full pt-5 px-4 mb-8 items-center ">
          <div className="text-sm text-gray-700 py-1">
            Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/form?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
          </div>
        </div>
      </div>



    </div>
  )
}

function dispatch(arg0: { type: string; value: any; }) {
  throw new Error("Function not implemented.");
}
