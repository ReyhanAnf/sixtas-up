import getDataPost from "@/app/lib/postdata";
import getUserProfile from "@/app/lib/userdata";
import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";


export default async function CardPost() {
  const data_post = await getDataPost();
  const data_user = await getUserProfile();

  function getUser(data, nis, poin) {
    const profile = data.filter(x => x.user.username == nis)[0];

    const propertyPath = poin;
    const propertyValue = propertyPath.split('.').reduce((obj, key) => obj?.[key], profile);

    return propertyValue;
  }

  return (
    <>
      {data_post.map((post: { post_id: Key | null | undefined; author: { first_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }; username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; answers: any[]; }) => (
        <>
          <div key={post.post_id}>
            <div className="contain-post border-l-2 border-purple-600 border-opacity-75 rounded-sm pl-1 mt-5 shadow-sm shadow-sky-900">
              <div className="profile-poster flex flex-row text-sm px-1 py-2 bg-gray-600 bg-opacity-15 items-center rounded-tr-md">
                <div>
                  <Image
                    className="rounded-full"
                    src="/profile_default.gif"
                    alt="profile logo"
                    width={36}
                    height={36}
                    priority
                  />
                </div>
                <div className="flex flex-col ml-2 px-1 py-2">
                  <div className="text-md text-gray-800 dark:text-slate-200 font-bold"> {getUser(data_user, post.author, "user.first_name")} </div>
                  <div className="text-xs text-gray-700 dark:text-slate-300">{getUser(data_user, post.author, "user.username")}</div>
                </div>
              </div>
              <div className="contain-content border-b-2 border-gray-600 bg-gray-600 bg-opacity-35 rounded-md py-2 px-3 mb-1">
                <div className="post-content">
                  <div className="context">
                    <p className="leading-normal text-gray-900 dark:text-slate-200 text-base md:text-xl mb-1 text-left">
                      {post.content}
                    </p>
                  </div>
                  <div className="metainfo text-xs text-gray-600 dark:text-slate-400 mt-3">
                    <div className="time">{post.at}</div>
                  </div>
                  <div className="stats flex justify-between border-t-2 border-gray-600 text-gray-500 dark:text-slate-400 py-1">
                    <div className="answer-meta">1 Answered</div>
                    <div className="flex mt-1">
                      <button key={post.post_id} className="answer-view rounded-md px-1 bg-slate-300 dark:bg-gray-700 dark:bg-opacity-75 mx-1" >view</button>
                      <button key={post.post_id} className="answer-view rounded-md px-1 bg-slate-300 dark:bg-gray-700 dark:bg-opacity-75 mx-1">Jawab</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div key={post.post_id} className="">


              {post.answers.map((answer) => (
                <>
                  <div id={answer.answer_id} className="contain-answer rounded-sm pl-1 mb-3 flex justify-between">
                    <div className="credible-answer w-3/8 ml-2 pr-2 border-r-2 border-green-600 border-opacity-75 rounded-sm">
                      <button className="">^</button>
                      <div className="credible-value text-center">7</div>
                      <button className="">v</button>
                    </div>
                    <div className="answer-content w-full ml-3 bg-gray-600 bg-opacity-35 rounded-md py-2 px-3 mb-1">
                      <div className="context">
                        <p className="leading-normal dark:text-slate-300 text-gray-600 text-base md:text-xl mb-1 text-left">
                          {answer.content}
                        </p>
                      </div>
                      <div className="metainfo text-xs dark:text-slate-500 text-gray-400 mt-3 flex justify-between items-center">
                        <div className="who flex items-center">
                          <div className="ans-photo m-1"></div>
                          <div className="ans-name font-semibold">by {getUser(data_user, answer.user, "user.first_name")}</div>
                        </div>
                        <div className="time">{answer.at}</div>
                      </div>
                      <div className="reply-stats flex justify-between border-t-2 border-gray-600 dark:text-slate-400 text-gray-500 py-1 text-sm">
                        <div className="answer-meta">2 reply</div>
                        <div className="flex mt-1">
                          <button id="reply-view-{{ answer.answer_id }}" className="reply-view rounded-md px-1 bg-slate-300 dark:bg-gray-700 dark:bg-opacity-75 mx-1" >view</button>
                          <button id="answer-view-{{ answer.answer_id }}" className="answer-view rounded-md px-1 bg-slate-300 dark:bg-gray-700 dark:bg-opacity-75 mx-1" >Reply</button>
                        </div>
                      </div>

                      <div id={answer.answer_id} className="">

                        {answer.replies.map((reply) => (
                          <>
                            <div id={reply.reply_id} className="reply-contains">
                              <div className="reply-who1 p-2 rounded-bl-lg border-l-2 border-b-2 border-gray-500 border-opacity-50">
                                <div className="reply-name text-xs text-slate-400 dark:text-gray-500 font-semibold">{getUser(data_user, reply.user, "user.first_name")}</div>
                                <div className="reply-content text-sm text-slate-300 dark:text-gray-600 pl-2 flex justify-between">
                                  <div className="reply-content text-sm text-slate-400 dark:text-gray-500 pl-2 flex justify-between">
                                    <div className="reply-context text-sm">{reply.content}</div>
                                    <div className="reply-time text-xs text-slate-400 dark:text-gray-500 pl-2">{reply.at}</div>
                                  </div>
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
