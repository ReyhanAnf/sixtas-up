import React from "react";
import Image from "next/image";
import FilterSearch from "./filter-search";
import { Input } from "@nextui-org/react";
import ResSearch from "./output-search";

export default function SearchPage() {
  return (
    <div className="w-full h-full px-8 rounded-2xl flex flex-col justify-start pt-5 bg-transparent text-white shadow-lg ">
      <Input
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
      <FilterSearch />


      <div className="flex flex-col justify-center">
        <ResSearch />
      </div>
    </div>
  );
}
