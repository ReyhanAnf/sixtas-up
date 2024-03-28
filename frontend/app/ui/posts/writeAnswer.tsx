"use client";

import { FormEvent } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Textarea, Image } from "@nextui-org/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import uploadAnswer from "@/app/lib/posts/uploadanswer";
import OnePost from "./onePost";

export default function WriteAnswer() {
  const params = useParams();
  const rout = useRouter();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    uploadAnswer(formData, params?.post.toString());

    rout.back()
  }

  return (
    <Card key={"answp123"} className="h-full w-full my-1 px-3 py-2 flex flex-col items-center justify-center">
      <CardHeader className="flex gap-3 justify-between">
        <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
          href={'/posts/' + params.post}
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
      <Divider />
      <OnePost wAnswer={false} />
      <form method="post" onSubmit={submitHandler} className="w-full px-10">
        <CardBody className="p-1 w-full">
          <Textarea
            key="input-underlined"
            variant="bordered"
            label="Answer Post"
            labelPlacement="outside"
            placeholder="Enter your answer"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            name="contentanswer"
          />
          {/* <Button
            className="bg-transparent text-foreground border-default-200"
            color="primary"
            radius="full"
            size="sm"
            variant="bordered"
            onPress={() => alert("gambar di upload")}
          >
            Upload Gambar
          </Button>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none my-2"
          >
            <Image
              alt="Woman listing to music"
              className="object-fill object-center"
              height={300}
              src="/hero-card.jpeg"
            />
          </Card> */}
        </CardBody>
        <CardFooter className="justify-end before:bg-white/30 border-white/30 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
          <Button
            className="bg-transparent"
            color="primary"
            radius="lg"
            size="md"
            onPress={() => { }}
            type="submit"
          >
            <Image
              className="rounded-full fill-slate-400 shadow-xl"
              src="/send.svg"
              alt="send button"
              width={30}
              height={30}
            />
          </Button>
        </CardFooter>
      </form>
    </Card >
  );
}
