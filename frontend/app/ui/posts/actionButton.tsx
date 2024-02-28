"use client";

import { Button, Image } from "@nextui-org/react";
import { useState } from "react";


export default function FollowButton() {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Button
      className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
      color="primary"
      radius="full"
      size="sm"
      variant={isFollowed ? "bordered" : "solid"}
      onPress={() => setIsFollowed(!isFollowed)}
    >
      {isFollowed ? "Followed" : "Follow"}
    </Button>
  )
}

export function StaredButton() {
  const [isStared, setIsStared] = useState(false);

  return (
    <Button className="answer-view rounded-md px-1 mx-1 flex items-center bg-transparent" radius="full" onPress={() => setIsStared(!isStared)}>
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