import { useState } from "react";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";

export default function WriteReply() {
  const variants = ["flat", "faded", "bordered", "underlined"];
  const [value, setValue] = useState("");

  return (
    <div className="fixed h-1/4 w-full bottom-0 right-0 z-50 bg-slate-900 px-2 py-3 bg-opacity-95 backdrop-blur-sm rounded-t-lg">
      <div className="w-full">
        <Textarea
          key="input-underlined"
          variant="bordered"
          label="Reply Answer"
          labelPlacement="outside"
          placeholder="Enter your reply"
          className=" mb-6 md:mb-0"
          value={value}
          onValueChange={setValue}
          endContent={
            <button>
              <Image
                className="rounded-full"
                src="/view-dark.svg"
                alt="view button"
                width={26}
                height={26}
                priority
              />
            </button>
          }
        />
      </div>
    </div>
  );
}
