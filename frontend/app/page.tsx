import React from "react";
import CardPost from "./ui/posts/postCards";

export default function Home() {
  return (
    <div className="flex flex-col justify-center px-2 w-full ">
      <CardPost />
      <CardPost />
      <CardPost />
    </div>
  );
}
