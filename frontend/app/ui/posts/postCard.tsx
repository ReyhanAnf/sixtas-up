import getDataPost from "@/app/lib/postdata";
import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";


export default async function CardPost(){
  const data = await getDataPost();
  return (
    <>
      {data.map((post: { post_id: Key | null | undefined; author: { first_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }; username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; answers: any[]; })=>(
        <>
          <div key={post.post_id}>
            <div className="contain-post border-l-2 border-purple-600 border-opacity-75 rounded-sm pl-1 my-3">
              <div className="profile-poster flex flex-row text-sm mb-1">
                <div>
                  <Image
                  className="rounded-full"
                  src="/profile_default.gif"
                  alt="profile logo"
                  width={26}
                  height={26}
                  priority
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <div> {post.author.first_name} </div>
                  <div className="text-xs text-gray-500">{ post.username }</div>
                </div>
              </div>
              <div className="contain-content border-b-2 border-gray-700 bg-gray-800 bg-opacity-90 rounded-md py-2 px-3 mb-1">
                <div className="post-content">
                  <div className="context">
                    <p className="leading-normal text-gray-400 text-base md:text-xl mb-1 text-left">
                      { post.content }
                    </p>
                  </div>
                  <div className="metainfo text-xs text-gray-500 mt-3">
                    <div className="time">{ post.at }</div>
                  </div>
                  <div className="stats flex justify-between border-t-2 border-gray-700 text-gray-400 py-1">
                          <div className="answer-meta">1 Answered</div>
                    <div className="flex mt-1">
                      <button key={post.post_id} className="answer-view rounded-md px-1 bg-gray-700 mx-1" >view</button>
                      <button key={post.post_id} className="answer-view rounded-md px-1 bg-gray-700 mx-1">Jawab</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div key={post.post_id} className="">

              {post.answers.map((answer) => (
              <>
                <div id={answer.answer_id} className="contain-answer rounded-sm pl-1 my-3 flex justify-between">
                  <div className="credible-answer w-3/8 ml-2 pr-2 border-r-2 border-green-600 border-opacity-50 rounded-sm">
                    <button className="">^</button>
                    <div className="credible-value text-center">7</div>
                    <button className="">v</button>
                  </div>
                  <div className="answer-content w-full ml-3 border-b-2 border-gray-700 bg-gray-800 bg-opacity-90 rounded-md py-2 px-3 mb-1">
                    <div className="context">
                      <p className="leading-normal text-gray-400 text-base md:text-xl mb-1 text-left">
                        {answer.content}
                      </p>
                    </div>
                    <div className="metainfo text-xs text-gray-400 mt-3 flex justify-between items-center">
                      <div className="who flex items-center">
                        <div className="ans-photo m-1"></div>
                        <div className="ans-name">by {answer.user.first_name}</div>
                      </div>
                      <div className="time">{ answer.at }</div>
                    </div>
                    <div className="reply-stats flex justify-between border-t-2 border-gray-700 text-gray-400 py-1 text-sm">
                            <div className="answer-meta">2 reply</div>
                      <div className="flex mt-1">
                        <button id="reply-view-{{ answer.answer_id }}" className="reply-view rounded-md px-1 bg-gray-700 mx-1" >view</button>
                        <button id="answer-view-{{ answer.answer_id }}" className="answer-view rounded-md px-1 bg-gray-700 mx-1" >Reply</button>
                      </div>
                    </div>

                    <div id={answer.answer_id} className="">

                      {answer.replies.map((reply) => (
                      <>
                      <div id={reply.reply_id} className="reply-contains">
                        <div className="reply-who1 p-2 rounded-bl-lg border-l-2 border-b-2 border-gray-500 border-opacity-50">
                          <div className="reply-name text-xs text-gray-300">{reply.user.first_name}</div>
                          <div className="reply-content text-sm text-gray-400 pl-2 flex justify-between">
                            <div className="reply-context text-sm">{ reply.content }</div>
                            <div className="reply-time text-xs text-gray-500 pl-2">{ reply.at }</div>
                          </div>
                        </div>
                      </div>
                      </>
                      ))}
                    </div>
                  </div>
                </div>
              </>
              ))}
          </div>
        </div>
      </>
      ))}
    </>
  )
}
