"use client";


// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import Answer from "./answerCard";
import { Card, CardHeader, CardBody, CardFooter, Button, Avatar, Image, Divider } from "@nextui-org/react";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";


// import { usePathname } from "next/navigation";

export default async function OnePost() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [back, setBack] = useState(false);
  const params = useParams();


  // const pathpost = path.split('/')[2];

  // let post = await getOnePost(pathpost);
  // const data_user = await getDataProfile();


  // function getUser(data: any[], nis: { first_name: string | number | boolean | ReactPortal | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }, poin: string) {
  //   const profile = data.filter(x => x.user.username == nis)[0];

  //   const propertyPath = poin;
  //   const propertyValue = propertyPath.split('.').reduce((obj, key) => obj?.[key], profile);

  //   return propertyValue;
  // }


  return (
    <Card className="sm:max-w-[600px] w-full my-1 bg-opacity-50">
      <CardHeader className="flex gap-3 justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/profile_default.gif" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
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
          {isFollowed ? "Saved" : "Save"}
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className="p-1">
        <p>Make beautiful websites regardless of your design experience.</p>
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none my-2 mx-auto"
        >
          <Image
            alt="Woman listing to music"
            className="object-center object-fill"
            height={300}
            src="/hero-card.jpeg"
          />
          <CardFooter className="justify-end before:bg-white/30 border-white/30 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
            <button className="answer-view rounded-md px-1 mx-1 flex items-center" onClick={() => { }}>
              <Image
                className="rounded-full fill-gray-900 shadow-xl"
                src="/view-dark.svg"
                alt="answer button"
                width={26}
                height={26}
              />
            </button>
            <button className="answer-view rounded-md px-1 mx-1 flex items-center">
              <Image
                className="rounded-full fill-slate-400 shadow-xl"
                src="/star-dark.svg"
                alt="answer button"
                width={26}
                height={26}
              />
            </button>
            <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
              href={'/posts/' + params.post + "/answer"}
            >
              <Image
                className="rounded-full fill-slate-400 shadow-xl"
                src="/answer.svg"
                alt="answer button"
                width={30}
                height={30}
              />
            </Link>
          </CardFooter>
        </Card>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
        <div className="answer-meta text-sm my-1 flex justify-between">
          <div className="p-1 border rounded-xl border-slate-500 bg-slate-800 bg-opacity-25 m-1">3 😂</div>
          <div className="p-1 border rounded-xl border-slate-500 bg-slate-800 bg-opacity-25 m-1">6 👌</div>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">9.1K</p>
          <p className="text-default-400 text-small">Comments</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Likes</p>
        </div>
      </CardFooter>

      <div>
        <h4>Answers</h4>
        <Answer />
        <Answer />
        <Answer />
      </div>
    </Card>
  )
}
