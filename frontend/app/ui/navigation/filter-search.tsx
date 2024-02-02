'use client'

import { useState } from "react";
import { RadioGroup, Radio, cn } from "@nextui-org/react";

export default function FilterSearch() {
  const [selected, setSelected] = useState("london");

  return (
    <div className="flex flex-col gap-3">
      <RadioGroup
        label="Filter Search"
        orientation="horizontal"
        value={selected}
        onValueChange={setSelected}
      >
        <Radio
          value="student"
          classNames={{
            base: cn(
              "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
              "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
              "data-[selected=true]:border-primary"
            ),
          }}>Student</Radio>
        <Radio
          value="notes and exam"
          classNames={{
            base: cn(
              "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
              "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
              "data-[selected=true]:border-primary"
            ),
          }}>Notes and Exam</Radio>
      </RadioGroup>
      {/* <p className="text-default-500 text-small pt-72">Selected: {selected}</p> */}
    </div>
  );
}
