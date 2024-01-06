import getDataPost from "@/app/lib/postdata";

export default async function CardPost(){
  const data = await getDataPost();
  console.log(data[0]);
  return (
    <>
    <div className="card-contain border-l-2 border-purple-600 border-opacity-75 rounded-sm pl-1 my-3">

      {data.map((post)=>(
      <div id={ post.post_id }>
        <div class="contain-post border-l-2 border-purple-600 border-opacity-75 rounded-sm pl-1 my-3">
          <div class="profile-poster flex flex-row text-sm mb-1">
            <div><img src="" class="bg-black w-10 h-10 rounded-full" /></div>
            <div class="flex flex-col ml-2">
              <div> Nama Lengkap </div>
              <di class="text-xs text-gray-500">{ post.author_id }</di>
            </div>
          </div>
          <div class="contain-content border-b-2 border-gray-700 bg-gray-800 bg-opacity-90 rounded-md py-2 px-3 mb-1">
            <div class="post-content">
              <div class="context">
                <p class="leading-normal text-gray-400 text-base md:text-xl mb-1 text-left">
                  { post.content_post }
                </p>
              </div>
              <div class="metainfo text-xs text-gray-500 mt-3">
                <div class="time">{ post.post_at }</div>
              </div>
              <div class="stats flex justify-between border-t-2 border-gray-700 text-gray-400 py-1">
                      <div class="answer-meta">1 Answered</div>
                <div class="flex mt-1">
                  <button id="answer-view-"{post.post_id} class="answer-view rounded-md px-1 bg-gray-700 mx-1" onClick="view_answer('{{ cpost.post_id }}')">view</button>
                  <button id="answer-view-"{post.post_id} class="answer-view rounded-md px-1 bg-gray-700 mx-1" onClick="document.location='posting/{{cpost.post_id}}/answer' ">Jawab</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="answer-"{post.post_id } class="hidden">
            {post.answer.map((answer) => (
          <div id={answer.answer_id} class="contain-answer rounded-sm pl-1 my-3 flex justify-between">
            <div class="credible-answer w-3/8 ml-2 pr-2 border-r-2 border-green-600 border-opacity-50 rounded-sm">
              <button class="">^</button>
              <div class="credible-value text-center">7</div>
              <button class="">v</button>
            </div>
            <div class="answer-content w-full ml-3 border-b-2 border-gray-700 bg-gray-800 bg-opacity-90 rounded-md py-2 px-3 mb-1">
              <div class="context">
                <p class="leading-normal text-gray-400 text-base md:text-xl mb-1 text-left">
                  {{ answer.content_answer }}
                </p>
              </div>
              <div class="metainfo text-xs text-gray-400 mt-3 flex justify-between items-center">
                <div class="who flex items-center">
                  <div class="ans-photo m-1"><img src={% static 'img/profile.jpeg' %} class="w-6 h-6 rounded-full" /></div>
                  <div class="ans-name">by Nama Lengkap</div>
                </div>
                <div class="time">{{ answer.answer_at }}</div>
              </div>
              <div class="reply-stats flex justify-between border-t-2 border-gray-700 text-gray-400 py-1 text-sm">
                      <div class="answer-meta">2 reply</div>
                <div class="flex mt-1">
                  <button id="reply-view-{{ answer.answer_id }}" class="reply-view rounded-md px-1 bg-gray-700 mx-1" onClick="view_reply('{{ answer.answer_id }}')">view</button>
                  <button id="answer-view-{{ answer.answer_id }}" class="answer-view rounded-md px-1 bg-gray-700 mx-1" onClick="document.location='posting/{{answer.answer_id}}/reply' ">Reply</button>
                </div>
              </div>

              <div id="reply-"{answer.answer_id} class="hidden">
                {answer.reply.map((reply) => (
                <div id={reply.reply_id} class="reply-contains">
                  <div class="reply-who1 p-2 rounded-bl-lg border-l-2 border-b-2 border-gray-500 border-opacity-50">
                    <div class="reply-name text-xs text-gray-300">Nama Lengkap</div>
                    <div class="reply-content text-sm text-gray-400 pl-2 flex justify-between">
                      <div class="reply-context text-sm">{ reply.content_reply }</div>
                      <div class="reply-time text-xs text-gray-500 pl-2">{ reply.reply_at }</div>
                    </div>
                  </div>
                </div>

                {% endfor %}
              </div>
            </div>
          </div>

          {% endfor %}

        </div>
      </div>
                ))}
              </div>
            ))}
          
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
