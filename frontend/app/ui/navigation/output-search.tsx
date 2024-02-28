"use client";

import { Card, CardHeader, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { getUser } from "@/app/lib/getdata";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";

export default async function ResSearch() {
  const [isFollowed, setIsFollowed] = useState(false);
  const dataUsers = (await getUser("all")).data;

  return (
    <div>
      {dataUsers.map((user: { first_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
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
      ))
      }
    </div>
  );
}
