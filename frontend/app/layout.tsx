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
      <body>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <nav>
              <NavbarUI />
            </nav>
            <main>
              {children}
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
