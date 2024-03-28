import { FormEvent, useState } from "react";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";
import uploadReply from "@/app/lib/posts/uploadreply";

export default function WriteReply({ answer_id, setvR }: any) {
  const [value, setValue] = useState("");
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    uploadReply(formData, answer_id)
  }

  return (
    <div className="fixed h-1/4 w-full bottom-0 right-0 z-50 bg-slate-800 px-2 py-3 bg-opacity-75 backdrop-blur-sm rounded-t-lg">
      <form method="post" onSubmit={submitHandler}>
        <div className="w-full">
          <Textarea
            key="input-underlined"
            name="contentreply"
            variant="bordered"
            label="Reply Answer"
            labelPlacement="outside"
            placeholder="Enter your reply"
            className=" mb-6 md:mb-0"
            value={value}
            onValueChange={setValue}
            endContent={
              <button type="submit">
                <Image
                  className="rounded-full"
                  src="/send.svg"
                  alt="send button"
                  width={26}
                  height={26}
                  priority
                  onClick={() => setvR(false)}
                />
              </button>
            }
          />
        </div>
      </form>
    </div>
  );
}
