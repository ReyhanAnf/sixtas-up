// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col transition-all duration-400">
      {theme == 'light' ? (

        <button onClick={() => setTheme('dark')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g fill="#2f323c">
              <path d="M2 12C2 6.477 6.477 2 12 2c.463 0 .54.693.143.933a6.5 6.5 0 108.924 8.924c.24-.396.933-.32.933.143 0 1.138-.19 2.231-.54 3.25H22a.75.75 0 010 1.5H2a.75.75 0 010-1.5h.54A9.987 9.987 0 012 12zM5 18.25a.75.75 0 000 1.5h14a.75.75 0 000-1.5H5zM8 21.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zM19.9 2.307a.483.483 0 00-.9 0l-.43 1.095a.484.484 0 01-.272.274l-1.091.432a.486.486 0 000 .903l1.091.432c.125.049.223.148.272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 01.273-.273l1.091-.432a.486.486 0 000-.903l-1.091-.432a.484.484 0 01-.273-.274l-.43-1.095z"></path>
              <path d="M16.033 8.13a.483.483 0 00-.9 0l-.157.399a.484.484 0 01-.272.273l-.398.158a.486.486 0 000 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 01.272-.273l.398-.157a.486.486 0 000-.903l-.398-.158a.484.484 0 01-.272-.273l-.157-.4z"></path>
            </g>
          </svg>
        </button>

      ) : (

        <button onClick={() => setTheme('light')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#d6d6d6"
            viewBox="0 0 24 24"
          >
            <path
              fill="#141414"
              d="M12 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zM0 13a1 1 0 011-1h2a1 1 0 110 2H1a1 1 0 01-1-1zm20 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm.485-8.485a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414-1.414l1.414-1.414a1 1 0 011.414 0zm-16.97 0a1 1 0 011.414 0l1.414 1.414A1 1 0 114.93 7.343L3.515 5.93a1 1 0 010-1.414zM7 21a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm13-4h-2.257A6.96 6.96 0 0019 13c0-3.862-3.138-7-7-7s-7 3.138-7 7c0 1.483.459 2.865 1.247 4H4a1 1 0 100 2h16a1 1 0 100-2z"
            ></path>
          </svg>
        </button>

      )
      }
    </div>
  )
};