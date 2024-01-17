import getDataPost from "@/app/lib/postdata";
import getUserProfile from "@/app/lib/userdata";
import getAnswer from "@/app/lib/answerdata";
import Image from "next/image";
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import { useParams } from "next/navigation";


export default async function CardPost() {
  const data_post = await getDataPost();
  const data_user = await getUserProfile();
  const data_answer = await getAnswer();
  console.log(data_answer);

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
            <Link className="contain-content rounded-md py-2 px-3 mb-1"
              href={'/posts/' + post.post_id}>
              <div className="post-content py-2 px-3">
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
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
