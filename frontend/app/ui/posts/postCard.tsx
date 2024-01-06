import getDataPost from "@/app/lib/postdata";

export default async function CardPost(){
  const data = await getDataPost();
  console.log(data[0]);
  return (
    <>
    <div className="card-contain border-l-2 border-purple-600 border-opacity-75 rounded-sm pl-1 my-3">

      {data.map((post)=>(
        <div key={post.post_id}>
          <div className="">{post.content_post}</div>
          <div className="">{post.author_id}</div>
          <div className="">{post.post_at}</div>
            {post.answer.map((answer) => (
              <div key={answer.answer_id}>
                <div className="font-italic text-xs">{answer.answerer_id}</div>
                <div className="font-italic text-xs">{answer.content_answer}</div>
                <div className="font-italic text-xs">{answer.answer_at}</div>
                {answer.reply.map((reply) => (
                  <div key={reply.reply_id}>
                    <div className="font-italic text-xs">{reply.replier_id}</div>
                    <div className="font-italic text-xs">{reply.content_reply}</div>
                    <div className="font-italic text-xs">{reply.reply_at}</div>
                  </div>
                ))}
              </div>
            ))}
          <hr />
          {/* <div className="">{post.answer.reply}</div>
           <div className="">{post.answer.reply.content_reply}</div>
          <div className="">{post.answer.reply.reply_at}</div> */}
        </div>
      ))}

      {/* {data.map((postone)=>(
        <div
        id={postone.post_id}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {postone.author_id}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {postone.content_post}
          </p>
        </div>
        ))} */}
        
    </div>
    </>
  )
}