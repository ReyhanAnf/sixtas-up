'use client';

import Image from 'next/image';
import Link from 'next/link';
import checkAuth from '@/app/lib/auth/checkAuth';
import logoutUser from '@/app/lib/auth/logoutUser';
import getUserAuthProfile from '@/app/lib/auth/authuserdata';
import { useState } from "react";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');

}

export default function Navbar() {
  let [dropMenu, setDropMenu] = useState(false);
  let [dropUserMenu, setDropUserMenu] = useState(false);
  checkAuth();
  let auth = localStorage.getItem('userToken');
  

  return (
 <div className="bg-gray-800 bg-opacity-20 backdrop-blur-md fixed w-full z-10">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SixtasUpp</span>
    </Link>
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false"
      onClick={()=> setDropUserMenu(!dropUserMenu)}
      >
        <span className="sr-only">Open user menu</span>
        
        <Image
          className="rounded-full"
          src="/profile_default.gif"
          alt="profile logo"
          width={36}
          height={36}
          priority
        />
      </button>
      {/* Dropdown menu */}
      <div className={classNames(dropUserMenu ? 'fixed right-12 top-12 md:hidden' : 'hidden', 'z-50 my-4 px-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-gray-700 divide-gray-600 bg-opacity-80 backdrop-blur-md')} id="user-dropdown">
        {auth? (
          <div>
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">{auth}</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{profiles.alamat}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
              </li>
              <li>
                <button onClick={()=> logoutUser()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Out</button>
              </li>
            </ul>
         </div>
        ):(
          <div>
            <div className="px-4 py-3">
              <Link href="/auth/login" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:bg-gray-100" aria-current="page">Login</Link>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
              </li>
            </ul>
         </div>
        )}
      </div>
        
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false"
      onClick={() => setDropMenu(!dropMenu)}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div className={classNames(dropMenu ? 'md:hidden visible' : 'invisible hidden', 'w-full mx-2 z-10 transition-all duration-500')} id="navbar-user">
      <div className="flex flex-col"
      onClick={()=> {let a= setInterval(()=>{setDropMenu(!dropMenu); clearInterval(a)}, 200);}}
      >
          <Link
            href='/'
            id='id-dashboard'
            className='text-gray-300 bg-gray-700 bg-opacity-20 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 my-2 text-sm font-medium'
            
          >
            Dashboard
          </Link>
          <Link
            href='/posts'
            id='id-posts'
            className='text-gray-300 bg-gray-700 bg-opacity-20 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 my-2 text-sm font-medium'
          >
            Posts
          </Link>
      </div>
    </div>
  </div>
</div>
  )
}
