import React from "react";
import CardPost from "./ui/posts/postCards";

export default function Home() {
  return (
    <div className="px-2 flex flex-col sm:flex-row">
      <div className="left sm:w-1/3">

      </div>
      <div className="post-center sm:w-1/3">
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      <div className="right sm:w-1/3">

      </div>
    </div>
  );
}
