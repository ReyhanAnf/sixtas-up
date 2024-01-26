'use client';
import { ThemeSwitcher } from "./ui/themeSwither";

export default function Home() {
  console.log('aku');
  return (
    <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
      <div className='w-full mt-10 m-0 lg:w-[60%] lg:scale-75'>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
