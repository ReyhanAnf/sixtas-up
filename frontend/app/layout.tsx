'use client'

import './globals.css'
import { poppins } from '@/app/ui/fonts';
import NavbarUI from './ui/navigation/navbar';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Sixtas UPP</title>
      </head>
      <body>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <nav className='fixed z-50 w-full '>
              <NavbarUI />
            </nav>
            <main className='pt-16 sm:px-10'>
              {children}
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
