"use client";

// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import Answer from "./answerCard";
import { Card, CardHeader, CardBody, CardFooter, Button, Avatar, Image, Divider } from "@nextui-org/react";
import { StaredButton } from "./actionButton";
import Link from "next/link";
import { getAnswerPost, getOnePost, getUser } from "@/app/lib/getdata";
import { useParams } from "next/navigation";
import { getCookies } from "cookies-next";
import SaveButton from "./actionButton";


export default async function OnePost({ wAnswer }: any) {

  const param = useParams();
  const post = (await getOnePost(param.post.toString())).data;
  const answers = (await getAnswerPost(param.post.toString())).data;
  const authCookie = getCookies();
  const dataUsers = (await getUser("all")).data;
  function findUsers(nis: any) {
    let found = dataUsers.find((user: {
      username: string;
    }) => user.username === nis);

    return found.first_name
  }

  let userA = authCookie.userToken;

  return (
    <Card className="sm:max-w-[600px] w-full my-1 bg-opacity-50" >
      {post.author == authCookie.userToken ?
        (
          <CardHeader className="flex justify-between">
            <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
              href={'/'}
            >
              <Image
                className="rounded-full fill-slate-400 shadow-xl"
                src="/back.svg"
                alt="back button"
                width={30}
                height={30}
              />
            </Link>
            <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
              href={`/posts/${post.post_id}/edit`}
            >
              <Image
                className="rounded-full fill-slate-400 shadow-xl"
                src="/edit.svg"
                alt="back button"
                width={35}
                height={35}
              />
            </Link>
          </CardHeader>
        )
        :
        wAnswer ? (
          <CardHeader className="">
            <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
              href={'/'}
            >
              <Image
                className="rounded-full fill-slate-400 shadow-xl"
                src="/back.svg"
                alt="back button"
                width={30}
                height={30}
              />
            </Link>
          </CardHeader>
        ) : ""
      }

      <CardHeader className="flex gap-3 justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/profile_default.gif" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{findUsers(post.author)}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{post.author}</h5>
          </div>
        </div>
        <SaveButton />
      </CardHeader>
      <Divider />
      <CardBody className="p-1">
        <Link className="contain-content text-white"
          href={'/posts/' + post.post_id}
        >
          <div>
            <div className="whitespace-pre-line dark:text-white text-slate-900">{post.content}</div>
          </div>
        </Link>

        <div className={post.image ? "" : "flex flex-row items-end justify-between"}>
          <div className="text-xs text-slate-600 h-6 py-1">{post.post_at}</div>

          {post.image ? (
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none my-2"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="/hero-card.jpeg"
              />
              {/* <CardFooter className="justify-end before:bg-white/30 border-white/30 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
                <button className="answer-view rounded-md px-1 mx-1 flex items-center">
                  <Image
                    className="rounded-full fill-gray-900 shadow-xl"
                    src="/view-dark.svg"
                    alt="answer button"
                    width={26}
                    height={26}
                  />
                </button>
                <StaredButton />
                <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                  href={'/posts/' + post.post_id + "/answer"}
                >
                  <Image
                    className="rounded-full fill-slate-400 shadow-xl"
                    src="/answer.svg"
                    alt="answer button"
                    width={30}
                    height={30}
                  />
                </Link>
              </CardFooter> */}
            </Card>

          )
            : (
              <div className="flex flex-row mt-5 justify-end rounded-none bg-transparent">
                <StaredButton idpost={post.post_id} userA={userA} realLike={post.likes} />
                <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
                  href={'/posts/' + post.post_id + "/answer"}
                >
                  <Image
                    className="rounded-full fill-slate-400 shadow-xl"
                    src="/answer.svg"
                    alt="answer button"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            )}
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
        <div className="answer-meta text-sm my-1 flex justify-between">
          <div className="p-1 border rounded-xl border-slate-500 bg-slate-800 bg-opacity-25 m-1">3 😂</div>
          <div className="p-1 border rounded-xl border-slate-500 bg-slate-800 bg-opacity-25 m-1">6 👌</div>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{answers.length}</p>
          <p className="text-default-400 text-small">Comments</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{post.likes.length}</p>
          <p className="text-default-400 text-small">Likes</p>
        </div>
      </CardFooter>

      {wAnswer ? (
        <div>
          <Answer />
        </div>
      ) : ""}
    </Card>
  )
}
