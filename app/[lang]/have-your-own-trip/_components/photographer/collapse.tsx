"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Collapse = () => {
  const [active, setActive] = useState<Boolean>(false);

  const handelClick = () => setActive(!active);

  return (
    <div
      className={cn(
        "relative font-medium text-sm  transition-all ease-in-out  ",
        active
          ? ""
          : "transition-all ease-in-out line-clamp-3 md:line-clamp-none after:inset-0 after:absolute md:after:static  after:bg-gradient-to-t after:from-[#FAF5EF] after:to-[#faf5ef00]"
      )}
    >
      <p className=" list-item text-[12px] leading-[160%] text-[#594636]">
        Choose one to three persons from the list below. We will introduce one
        to you according to your preference based on their availability.
      </p>
      <p className=" list-item text-[12px] leading-[160%] text-[#594636]">
        If you could not find that person, inform us through whatsapp or vip+ .
        We will introduce to you the required person.
      </p>
      <button
        onClick={handelClick}
        className={cn(
          "absolute md:hidden w-[100px] h-[30px]   z-[9999] bottom-0 left-1/2  -ml-[50px] cursor-pointer text-[#594636] text-sm font-semibold",
          active && " -bottom-10"
        )}
      >
        {active ? "See Less" : "See More"}
      </button>
    </div>
  );
};

