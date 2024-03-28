"use client";

import Image from "next/image";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { kelas, jurusan, subjurusan, angkatan, jenus_kelamin } from "@/app/profile/me/edit/data";
import getAuthDataProfile from "@/app/lib/auth/getauthdata";
// import { MailIcon } from "./mailicon";
import { FormEvent } from "react";
import updateProfile from "@/app/lib/updates/updateprofile";
import { getCookies } from "cookies-next";


export default async function EditProfile() {
  const pathname = usePathname();
  const rout = useRouter();
  const usecookie = getCookies();
  if (usecookie.userToken === undefined) {
    rout.replace("/")
  }
  const myprofiledata = (await getAuthDataProfile()).data;
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    updateProfile(formData);

    alert("Saved ✅")
    rout.back();
  }

  return (
    <div className="flex flex-col ">
      <form method='patch' onSubmit={submitHandler}>
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
            className="p-4"
            name="themeimage"
            labelPlacement="outside"
            placeholder="."
          />
          <Input
            type="file"
            label="Ganti Foto Profile"
            className="p-4"
            name="profileimage"
            labelPlacement="outside"
            placeholder="."
          />
          <div className="mt-16 flex flex-col items-center">
            <div className="max-w-xs text-center my-1 flex flex-col">
              <span>{myprofiledata.user.first_name}</span>
              <span>{myprofiledata.user.last_name}</span>
            </div>
            {/* <Input
              type="text"
              label="Sort Name"
              defaultValue={myprofiledata.user.last_name}
              className="max-w-xs text-center my-1"
              name="lastname"
            /> */}
            <h6 className="text-sm font-mono text-gray-600 mt-1">212210092</h6>
            <div className="flex flex-col items-center p-2 my-1">
              <Textarea
                label="Bio"
                placeholder="Enter your bio"
                defaultValue={myprofiledata.bio}
                className="w-full font-mono my-1"
                name="bio"
              />
              {/* <Input
                isRequired
                type="email"
                label="email"
                defaultValue={myprofiledata.user.email}
                className="max-w-xs text-center my-1"
                name="email"
                labelPlacement="outside"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              /> */}
              <Input
                type="text"
                label="alamat"
                defaultValue={myprofiledata.alamat}
                className="max-w-xs text-center my-1"
                name="alamat"
              />
              <Input
                type="text"
                label="kontak (nomer whatsapp)"
                defaultValue={myprofiledata.kontak}
                className="max-w-xs text-center my-1"
                name="kontak"
              />
              <div className="flex w-full flex-col">
                <Select
                  label="Jenis Kelamin"
                  className="w-full font-mono my-1"
                  defaultSelectedKeys={[myprofiledata.jenis_kelamin]}
                  name="jenis_kelamin"
                >
                  {jenus_kelamin.map((jk) => (
                    <SelectItem key={jk.value} value={jk.value}>
                      {jk.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Kelas"
                  className="w-full font-mono my-1"
                  defaultSelectedKeys={[myprofiledata.kelas]}
                  name="kelas"
                >
                  {kelas.map((kela) => (
                    <SelectItem key={kela.value} value={kela.value}>
                      {kela.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Jurusan"
                  className="w-full font-mono my-1"
                  defaultSelectedKeys={[myprofiledata.jurusan]}
                  name="jurusan"
                >
                  {jurusan.map((jurusa) => (
                    <SelectItem key={jurusa.value} value={jurusa.value}>
                      {jurusa.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Sub Jurusan"
                  className="w-full font-mono my-1"
                  defaultSelectedKeys={[myprofiledata.subjurusan]}
                  name="subjurusan"
                >
                  {subjurusan.map((sj) => (
                    <SelectItem key={sj.value} value={sj.value}>
                      {sj.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <Select
                label="Angkatan"
                className="w-full font-mono my-1"
                defaultSelectedKeys={[myprofiledata.angkatan]}
                name="angkatan"
              >
                {angkatan.map((angkat) => (
                  <SelectItem key={angkat.value} value={angkat.value}>
                    {angkat.label}
                  </SelectItem>
                ))}
              </Select>
              <Input
                type="date"
                label="Tanggal Lahir"
                defaultValue={myprofiledata.ttl}
                className="max-w-xs text-center my-1"
                name="ttl"
              />
            </div>

          </div>


          <div className="flex gap-20 md:!gap-20 mt-6 mb-3">
            <Link href={pathname + "/.."} >
              <Button variant="bordered" className="shadow-lg shadow-slate-800">Cancel</Button>
            </Link>
            <Link href={pathname + "/.."} >
              <Button variant="bordered" className="shadow-lg shadow-slate-800" type="submit" >Save</Button>
            </Link>

          </div>
        </div>

      </form>
    </div>
  )
}

