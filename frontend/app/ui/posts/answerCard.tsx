"use client";

import Image from "next/image"
import Reply from "./replyCard"
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import WriteReply from "./writeReply";
import { useParams } from "next/navigation";
import { getAnswerPost } from "@/app/lib/getdata";

export default async function Answer() {
  const [onReply, setOnReply] = useState(false);
  const param = useParams();
  const answers = (await getAnswerPost(param.post.toString())).data;

  return (
    <div>
      {answers.length > 0 ? (
        <h4>Answers</h4>
      ) : (
        <div className="w-full px-3 py-5 flex flex-1 justify-center self-center text-center">Belum Ada Balasan</div>
      )}
      {answers.map((answer: {
        replies: any; answer_id: Key | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; user: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
      }) => (
        <div key={answer.answer_id} data-key={answer.answer_id}>
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
                  {answer.content}
                </p>
              </div>
              <div className="metainfo text-sm p-1 mt-3 flex justify-between items-center text-slate-300 dark:text-gray-500">
                <div className="who flex items-center">
                  <div className="ans-photo m-1"></div>
                  <div className="ans-name">by {" "}
                    <span className="font-bold text-slate-300">
                      {answer.user}
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
                    {answer.replies.map((reply: { user: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                      <div key="dstgrw3" data-key="dstgrw3">
                        <div key="dfaf45" data-key="dfaf45" className="reply-contains">
                          <div className="reply-who1 p-2">
                            <div className="reply-name text-sm text-cyan-700 font-semibold">{reply.user} • {reply.at}</div>
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