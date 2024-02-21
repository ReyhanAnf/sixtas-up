"use client";

import { useState } from "react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Textarea, Image } from "@nextui-org/react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function UploadPost() {
  const [value, setValue] = useState("");
  const params = useParams();

  return (
    <Card className="h-full w-full my-1 px-3 py-2">
      <CardHeader className="flex gap-3 justify-between">
        <Link className="answer-view rounded-md px-1 mx-1 flex items-center"
          href={'/'}
        >
          Kembali
        </Link>
      </CardHeader>
      <Divider />
      <CardBody className="p-1">
        <Textarea
          key="input-underlined"
          variant="bordered"
          label="Answer Post"
          labelPlacement="outside"
          placeholder="Enter your ask"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          value={value}
          onValueChange={setValue}
        />
        <Button
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
        </Card>
      </CardBody>
      <CardFooter className="justify-end before:bg-white/30 border-white/30 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
        <Button
          className="bg-transparent text-foreground border-default-200"
          color="primary"
          radius="lg"
          size="md"
          variant="bordered"
          onPress={() => { }}
        >
          Kirim
        </Button>
      </CardFooter>
    </Card >
  );
}
