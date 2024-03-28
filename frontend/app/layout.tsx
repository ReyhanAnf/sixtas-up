'use client'

import './globals.css';
import checkAuth from './lib/auth/checkAuth';
import NavbarUI from './ui/navigation/navbar';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  checkAuth();
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
