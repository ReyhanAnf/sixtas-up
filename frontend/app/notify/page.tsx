"use client";

import { Suspense } from "react";
import Notif from "../ui/notify/notif";
import Messages from "../ui/notify/message";
import { useState } from "react";

export default function Page() {
  const [choice, setChoice] = useState("notif");
  return (
    <div>
      <div className="flex relative min-h-screen flex-col items-center justify-between py-12 px-2">
        <div className='w-full m-0 lg:w-[60%] lg:scale-75'>
          <div className="choice flex flex-row">
            <div className={choice == "notif" ? "w-1/2 h-12 px-3 py-2 text-center bg-slate-400 bg-opacity-5 hover:bg-opacity-10 transition-all duration-200 border-b-1 border-slate-300 border-opacity-75" : "w-1/2 h-12 px-3 py-2 text-center bg-slate-400 bg-opacity-5 hover:bg-opacity-50 transition-all duration-200"} onClick={() => setChoice("notif")}>Notification</div>
            <div className={choice == "message" ? "w-1/2 h-12 px-3 py-2 text-center bg-slate-400 bg-opacity-5 hover:bg-opacity-10 transition-all duration-200 border-b-1 border-slate-300 border-opacity-75" : "w-1/2 h-12 px-3 py-2 text-center bg-slate-400 bg-opacity-5 hover:bg-opacity-50 transition-all duration-200"} onClick={() => setChoice("message")}>Message</div>

          </div>
          <Suspense fallback={<p className="my-28 flex justify-center items-center">Loading...</p>}>
            {choice == "notif" ? (
              <Notif />
            ) : (
              <Messages />
            )}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
