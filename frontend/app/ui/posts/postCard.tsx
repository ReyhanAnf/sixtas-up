import getDataPost from "@/app/lib/postdata";
import getUserProfile from "@/app/lib/userdata";
import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";


export default async function CardPost() {
  const data_post = await getDataPost();
  const data_user = await getUserProfile();

  function getUser(data: any[], nis: { first_name: string | number | boolean | ReactPortal | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }, poin: string) {
    const profile = data.filter(x => x.user.username == nis)[0];

    const propertyPath = poin;
    const propertyValue = propertyPath.split('.').reduce((obj, key) => obj?.[key], profile);

    return propertyValue;
  }

  return (
    <>
      {data_post.map((post: { post_id: Key | null | undefined; author: { first_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }; username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; post_at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; answers: any[]; }) => (
        <div key={post.post_id} data-key={post.post_id}>
          <div className="contain-post mt-4 bg-gray-800 bg-opacity-60 shadow-sm rounded-md">
            <div className="profile-poster flex flex-row text-sm px-3 py-3 pt-4 bg-gray-800 bg-opacity-15 items-center rounded-tr-md">
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
            <div className="contain-content border-b-2 border-gray-600 rounded-md py-2 px-3 mb-1">
              <div className="post-content">
                <div className="context">
                  <p className="leading-normal text-gray-900 dark:text-slate-200 text-base md:text-xl mb-1 py-2 text-left">
                    {post.content}
                  </p>
                </div>
                <div className="metainfo text-xs text-gray-600 dark:text-slate-400 mt-3">
                  <div className="time">{post.post_at}</div>
                </div>
                <div className="stats flex justify-between border-t-2 border-gray-600 text-gray-500 dark:text-slate-400 py-1">
                  <div className="answer-meta text-sm my-1 flex justify-between">
                    <div className="p-1 border rounded-xl border-slate-500 bg-slate-800 m-1">3 😂</div>
                    <div className="p-1 border rounded-xl border-slate-500 bg-slate-800 m-1">6 👌</div>
                  </div>
                  <div className="flex mt-1">
                    <button className="answer-view rounded-md px-1 mx-1" >
                      <Image
                        className="rounded-full"
                        src="/view-dark.svg"
                        alt="view button"
                        width={26}
                        height={26}
                        priority
                      />
                    </button>
                    <button className="answer-view rounded-md px-1 mx-1 flex items-center">
                      <div>{post.answers.length}</div>
                      <Image
                        className="rounded-full fill-slate-400"
                        src="/star-dark.svg"
                        alt="answer button"
                        width={26}
                        height={26}
                        priority
                      />
                    </button>
                    <button className="answer-view rounded-md px-1 mx-1 flex items-center">
                      <div>{post.answers.length}</div>
                      <Image
                        className="rounded-full fill-slate-400"
                        src="/answer.svg"
                        alt="answer button"
                        width={30}
                        height={30}
                        priority
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>



            <div key={"answers-post-" + post.post_id} data-key={"answers-post-" + post.post_id}>


              {post.answers.map((answer) => (
                <div key={answer.answer_id} className="contain-answer rounded-sm p-4 mb-3 flex justify-between">
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
                            {getUser(data_user, answer.user, "user.first_name")}
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
                        <div>{answer.up}  </div>
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
                        <button className="answer-view rounded-md px-1 mx-1 flex items-center">
                          <div>{answer.replies.length}  </div>
                          <Image
                            className="rounded-full fill-slate-400"
                            src="/reply-dark.svg"
                            alt="answer button"
                            width={22}
                            height={22}
                            priority
                          />
                        </button>
                      </div>
                    </div>

                    <div key={"replies-answer-" + answer.answer_id} data-key={"replies-answer-" + answer.answer_id}>
                      <span className="text-gray-400 font-bold">
                        Replies
                      </span>

                      {answer.replies.map((reply: { reply_id: Key | null | undefined; user: any; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                        <div key={reply.reply_id} data-key={reply.reply_id} className="reply-contains">
                          <div className="reply-who1 p-2 rounded-bl-lg border-l-2 border-b-2 border-gray-500 border-opacity-50">
                            <div className="reply-name text-sm text-cyan-700 font-semibold">{getUser(data_user, reply.user, "user.first_name")} • {reply.at}</div>
                            <div className="reply-content text-sm pl-2 flex justify-between">
                              <div className="reply-content text-sm text-gray-400 p-2 flex justify-between">
                                <div className="reply-context text-sm">{reply.content}</div>

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
