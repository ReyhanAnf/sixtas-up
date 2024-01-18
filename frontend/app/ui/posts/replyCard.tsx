// <div key={"replies-answer-" + answer.answer_id} data-key={"replies-answer-" + answer.answer_id}>
//   <span className="text-gray-400 font-bold">
//     Replies
//   </span>

//   {answer.replies.map((reply: { reply_id: Key | null | undefined; user: any; at: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
//     <div key={reply.reply_id} data-key={reply.reply_id} className="reply-contains">
//       <div className="reply-who1 p-2 rounded-bl-lg border-l-2 border-b-2 border-gray-500 border-opacity-50">
//         <div className="reply-name text-sm text-cyan-700 font-semibold">{getUser(data_user, reply.user, "user.first_name")} • {reply.at}</div>
//         <div className="reply-content text-sm pl-2 flex justify-between">
//           <div className="reply-content text-sm text-gray-400 p-2 flex justify-between">
//             <div className="reply-context text-sm">{reply.content}</div>

//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>