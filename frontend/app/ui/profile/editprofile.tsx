"use client";

import Image from "next/image";
import { Button, Divider, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { kelas, jurusan, subkelas, angkatan } from "@/app/profile/edit/data";


export default function EditProfile() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex flex-col ">
      <form>
        <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] p-4 bg-slate-200 backdrop-blur-md bg-opacity-10 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover mb-14">
            <Image
              src="/banner_default.png"
              className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
              alt="banner"
              width={200}
              height={100}
            />

            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-cyan-400 dark:!border-navy-700">
              <Image
                className="rounded-full transition-transform"
                src="/profile_default.gif"
                alt="profile logo"
                width={75}
                height={75}
                priority
              />

            </div>
          </div>
          <Input
            type="file"
            label="Ganti Foto Tema"
            className="w-28 mt-4"
            name="themeimage"
            labelPlacement="outside"
            placeholder="."
          />
          <Input
            type="file"
            label="Ganti Foto Profile"
            className="w-32 mt-3"
            name="profileimage"
            labelPlacement="outside"
            placeholder="."
          />
          <div className="mt-16 flex flex-col items-center">
            <Input
              isRequired
              type="text"
              label="Full Name"
              defaultValue="Adela Parkson"
              className="max-w-xs text-center my-1"
              name="firstname"
            />
            <Input
              isRequired
              type="text"
              label="Sort Name"
              defaultValue="Adel"
              className="max-w-xs text-center my-1"
              name="shortname"
            />
            <h6 className="text-sm font-mono text-gray-600 mt-1">212210092</h6>
            <div className="flex flex-col items-center p-2 my-1">
              <Textarea
                label="Bio"
                placeholder="Enter your bio"
                defaultValue="lowercase"
                className="w-full font-mono my-1"
                name="bio"
              />
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                  label="Kls"
                  className="w-full font-mono my-1"
                >
                  {kelas.map((kela) => (
                    <SelectItem key={kela.value} value={kela.value}>
                      {kela.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Jrsn"
                  className="w-full font-mono my-1"
                >
                  {jurusan.map((jurusa) => (
                    <SelectItem key={jurusa.value} value={jurusa.value}>
                      {jurusa.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="SKls"
                  className="w-full font-mono my-1"
                >
                  {subkelas.map((subkela) => (
                    <SelectItem key={subkela.value} value={subkela.value}>
                      {subkela.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <Select
                label="Angkatan"
                className="w-full font-mono my-1"
              >
                {angkatan.map((angkat) => (
                  <SelectItem key={angkat.value} value={angkat.value}>
                    {angkat.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>


          <div className="flex gap-20 md:!gap-20 mt-6 mb-3">
            <Link href={pathname + "/.."} >
              <Button variant="bordered" className="shadow-lg shadow-slate-800">Cancel</Button>
            </Link>
            <Link href={pathname + "/.."} >
              <Button variant="bordered" className="shadow-lg shadow-slate-800">Save</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}