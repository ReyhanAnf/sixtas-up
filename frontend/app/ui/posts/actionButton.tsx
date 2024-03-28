"use client";

import { Button, Image } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import likePost from "@/app/lib/updates/like";

export default function SaveButton() {
  const [isSaved, setisSaved] = useState(false);

  return (
    <Button
      className="bg-transparent"
      radius="full"
      size="sm"
      onPress={() => { setisSaved(!isSaved) }}
    >
      {isSaved ? (
        <Image
          className="rounded-full fill-slate-400 shadow-xl"
          src="/unsave.svg"
          alt="unsave button"
          width={25}
          height={25}
        />
      ) : (
        <Image
          className="rounded-full fill-slate-400 shadow-xl"
          src="/save.svg"
          alt="save button"
          width={25}
          height={25}
        />
      )}
    </Button>
  )
}

export function StaredButton({ idpost, userA, realLike }: any) {
  const [isStared, setIsStared] = useState(realLike.includes(userA));
  const likedpost = [userA];


  const handleLike = () => {
    if (realLike.includes(userA) && isStared == true) {
      let index = realLike.indexOf(userA);
      realLike.splice(index, 1);
      likePost(idpost, realLike)
      setIsStared(false);
    } else {
      likePost(idpost, realLike.concat(likedpost));
      setIsStared(true);
    }
  }

  return (
    <Button className="answer-view rounded-md px-1 mx-1 flex items-center bg-transparent" radius="full"
      onPress={() => handleLike()}
    >
      {isStared ? (
        <Image
          className="rounded-full fill-slate-400 shadow-xl ring-1"
          src="/starf.svg"
          alt="liked button"
          width={21}
          height={21}
        />
      ) : (
        <Image
          className="rounded-full fill-slate-400 shadow-xl"
          src="/star-dark.svg"
          alt="like button"
          width={21}
          height={21}
        />
      )}
    </Button>
  )
}

export function UploadButton() {

  return (
    <Button className="answer-view rounded-md p-1 flex items-center bg-gray-800 bg-opacity-35 backdrop-blur-sm" radius="md" href="posts/upload" as={Link}>
      <Image
        className="rounded-md fill-slate-400 shadow-xl "
        src="/up-dark.svg"
        alt="liked button"
        width={21}
        height={21}
      />
    </Button>
  )
}


