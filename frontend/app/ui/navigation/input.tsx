"use client";

import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useRef } from "react";

export default function InputSearch() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  function handler(search: string) {
    const { push } = useRouter();
    const pathname = usePathname();
    if (search) {
      params.set('query', search);
    } else {
      params.delete('query');
    }

  }

  handler(search);

  return (
    <div>
      <Input
        onValueChange={setSearch}
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <Image
            className="rounded-sm transition-transform pt-1"
            src="/search.svg"
            alt="search"
            width={30}
            height={30}
            priority
          />
        }
      />

      <div id="value-search" className="p-3">
        Hasil : {search}
      </div>
    </div>
  )
}