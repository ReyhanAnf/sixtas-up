"use client";

import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUser } from "@/app/lib/getdata";
import CardSearch from "./searchprofilecard";
import { profile } from "console";

export const iProfile = Array();
export let profiles = Array();

export async function getiProfile() {
  const getting = (await getUser("all")).data;

  getting.map((profile: any) => {
    return iProfile.push(profile);
  })
}

getiProfile();

export default function InputSearch() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const finded = iProfile.find(profile => profile.username.includes(search) || profile.first_name.toLowerCase().includes(search.toLowerCase()));
    console.log(finded);
    if (finded) {
      if (data.includes(finded)) {
        console.log(data.includes(finded));
      } else {
        setData(data => [...data, finded]);
      }
    }

    data.map((value, index) => {
      if (value.username.includes(search) || value.first_name.includes(search)) {
        console.log(value);
      } else {
        data.splice(index, 1);
      }
    })

  }, [search]);



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
      {/* <input
        value={search}
        placeholder="gas.."
        onChange={e => setSearch(e.target.value)}
      /> */}

      <div id="value-search" className="p-3">
        {
          data.map((profile, index) => (
            <div key={`s-${index}`}>
              {profile ? (
                <CardSearch user={profile} />
              ) : ("")}
            </div>
          ))
        }
      </div>
    </div>
  )
}