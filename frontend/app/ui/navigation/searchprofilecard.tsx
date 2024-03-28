"use client";

import { Card, CardHeader, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function CardSearch(Props: any) {
  const [isFollowed, setIsFollowed] = useState(false);
  const user = Props.user;

  return (
    <div>
      <Card className=" w-full my-1 bg-opacity-50">
        <Link href={`/profile/${user.username}`}>
          <CardHeader className="flex gap-3 justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src="/profile_default.gif" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">{user.first_name}</h4>
                <h5 className="text-small tracking-tight text-default-400">{user.username}</h5>
              </div>
            </div>
            <Button
              className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
              color="primary"
              radius="full"
              size="sm"
              variant={isFollowed ? "bordered" : "solid"}
              onPress={() => setIsFollowed(!isFollowed)}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
        </Link>
      </Card>
    </div>
  );
}
