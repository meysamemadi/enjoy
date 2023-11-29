'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const DescriptionCollapse = ({text}:{text:string}) => {
    const [active,setActive] = useState<Boolean>(false)

    const handelClick = () => setActive(!active)

    return (
      <p
        className={cn(
          "relative text-center font-medium mt-4 md:mt-5 max-w-[880px] mx-auto transition-all ease-in-out text-[#594636] ",
          active
            ? ""
            : "transition-all ease-in-out line-clamp-5 md:line-clamp-4 after:inset-0 after:absolute  after:bg-gradient-to-t after:from-[#FAF5EF] after:to-[#faf5ef00]"
        )}
      >
        {text}
        <button
          onClick={handelClick}
          className={cn(
            "absolute w-[100px] h-[30px]   z-[9999] bottom-0 left-1/2  -ml-[50px] cursor-pointer text-[#594636] text-sm font-semibold",
            active && " -bottom-10"
          )}
        >
          {active ? "See Less" : "See More"}
        </button>
      </p>
    );
}
 
export default DescriptionCollapse;