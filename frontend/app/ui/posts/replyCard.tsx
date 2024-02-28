"use client";

import { getOnePost } from "@/app/lib/getdata";
import { Divider } from "@nextui-org/react";
import { useParams } from "next/navigation";


export default async function Reply() {
  const param = useParams();
  const post = (await getOnePost(param.post.toString())).data;

  return (
    <div key="dstgrw3" data-key="dstgrw3">
      <div key="dfaf45" data-key="dfaf45" className="reply-contains">
        <div className="reply-who1 p-2">
          <div className="reply-name text-sm text-cyan-700 font-semibold">Reyhan Andrea Firdaus • 15.23</div>
          <div className="reply-content text-sm flex justify-between">
            <div className="reply-content text-sm text-gray-400 py-2 flex justify-between">
              <div className="reply-context text-sm">RUGI DONGG</div>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  )
}