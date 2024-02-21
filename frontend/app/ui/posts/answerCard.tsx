import Image from "next/image"
import Reply from "./replyCard"
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";
import WriteReply from "./writeReply";

export default function Answer() {
  const [onReply, setOnReply] = useState(false);


  return (
    <div key="312445" data-key="312445">
      {onReply ? (
        <div>
          <WriteReply />
        </div>
      ) : (
        <></>
      )}
      <div key="123" className="contain-answer rounded-sm p-4 mb-3 flex justify-between">
        <div className="credible-answer w-3/8 rounded-sm">
        </div>
        <div className="answer-content w-full bg-gray-600 bg-opacity-35 rounded-md py-2 px-3 mb-1">

          <div className="context p-2">
            <p className="leading-normal dark:text-slate-300 text-gray-600 text-base md:text-xl mb-1 text-left">
              Yang Bener Aje
            </p>
          </div>
          <div className="metainfo text-sm p-1 mt-3 flex justify-between items-center text-slate-300 dark:text-gray-500">
            <div className="who flex items-center">
              <div className="ans-photo m-1"></div>
              <div className="ans-name">by {" "}
                <span className="font-bold text-slate-300">
                  Reyhan Andrea Firdaus
                </span>
              </div>
            </div>
            <div className="time">12.54</div>
          </div>
          <div className="reply-stats flex justify-between border-t-2 border-gray-600 dark:text-slate-400 text-gray-500 py-2 text-sm">
            <button className="answer-up rounded-md px-1 mx-1 flex items-center">
              <Image
                className="rounded-full fill-slate-400"
                src="/up-dark.svg"
                alt="answer button"
                width={22}
                height={22}
                priority
              />
              <div>6  </div>
            </button>
            <div className="flex mt-1">
              <button className="answer-view rounded-md px-1 mx-1" >
                <Image
                  className="rounded-full"
                  src="/view-dark.svg"
                  alt="view button"
                  width={24}
                  height={24}
                  priority
                />
              </button>
              <button className="answer-view rounded-xl px-2 py-1 mx-1 text-center bg-gray-700" onClick={() => { setOnReply(!onReply) }}>
                reply
              </button>
            </div>
          </div>
          <div>
            <Accordion variant="bordered" isCompact>
              <AccordionItem key="1" aria-label="Replies" title="Replies">
                <Reply />
                <Reply />
                <Reply />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}