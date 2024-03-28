"use client";

import Image from "next/image";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import WriteReply from "./writeReply";
import { useParams } from "next/navigation";
import { getAnswerPost, getUser } from "@/app/lib/getdata";

export default async function Answer() {
  const [onReply, setOnReply] = useState("");
  const [vReply, setvReply] = useState(false);
  const param = useParams();
  const answers = (await getAnswerPost(param.post.toString())).data;
  const dataUsers = (await getUser("all")).data;

  function findUsers(nis: any) {
    let found = dataUsers.find((user: {
      username: string;
    }) => user.username === nis);

    return found.last_name
  }

  return (
    <div>
      {answers.length > 0 ? (
        <h4>Answers</h4>
      ) : (
        <div className="w-full px-3 py-5 flex flex-1 justify-center self-center text-center">Belum Ada Balasan</div>
      )}
      {answers.map((answer: {
        up: ReactNode;
        replies: any; answer_id: any; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; user: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
      }) => (
        <div key={answer.answer_id} data-key={answer.answer_id}>
          <div className={vReply ? "block" : "hidden"}>
            <WriteReply answer_id={onReply} setvR={setvReply} />
          </div>
          <div className="contain-answer rounded-sm p-4 mb-3 flex justify-between">
            <div className="credible-answer w-3/8 rounded-sm">
            </div>
            <div className="answer-content w-full bg-gray-600 bg-opacity-35 rounded-md py-2 px-3 mb-1">

              <div className="context p-2">
                <p className="leading-normal dark:text-slate-300 text-gray-600 text-base md:text-xl mb-1 text-left">
                  {answer.content}
                </p>
              </div>
              <div className="metainfo text-sm p-1 mt-3 flex justify-between items-center text-slate-300 dark:text-gray-500">
                <div className="who flex items-center">
                  <div className="ans-photo m-1"></div>
                  <div className="ans-name text-sm">by {" "}
                    <span className="font-semibold text-slate-300">
                      {findUsers(answer.user)}
                      <span className="text-gray-700 text-xs">
                        - {answer.user}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="time">{answer.at}</div>
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
                  <div>{answer.up}</div>
                </button>
                <div className="flex mt-1 items-center">
                  <button className="answer-view rounded-xl px-2 py-1 mx-1 text-center bg-gray-700" onClick={() => {
                    setOnReply(answer.answer_id);
                    setvReply(true);
                  }}>
                    reply
                  </button>
                </div>
              </div>
              <div>
                <Accordion variant="bordered" isCompact>
                  <AccordionItem key={`acc-${answer.answer_id}`} aria-label="Replies" title={(answer.replies).length + " Replies"}>
                    {answer.replies.map((reply: {
                      reply_id: Key | null | undefined; user: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                    }) => (
                      <div key={reply.reply_id} data-key={reply.reply_id}>
                        <div className="reply-contains">
                          <div className="reply-who1 p-2">
                            <div className="reply-name text-xs text-cyan-700 font-semibold">{findUsers(reply.user)}~{reply.user} • {reply.at}</div>
                            <div className="reply-content text-sm flex justify-between">
                              <div className="reply-content text-sm text-gray-400 py-2 flex justify-between">
                                <div className="reply-context text-sm">{reply.content}</div>
                              </div>
                            </div>
                          </div>
                          <Divider />
                        </div>
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}