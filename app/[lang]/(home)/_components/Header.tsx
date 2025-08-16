"use client";

import ImageHeader from "@/public/img/base/iran.png";
import Image from "next/image";
import { brand, harmony, Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
export const Header = ({
  dictionary,
}: {
  dictionary: {
    enjoy: string;
    persia: string;
    Lovely_destination_for_your_next_travel: string;
  };
}) => {
  return (
    <div className=" container">
      <div
        className={
          "flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mb-8 md:mb-12"
        }
      >
        <div className="flex flex-col text-center md:text-left order-2 md:order-1">
          <div className="flex flex-col relative ">
            <h2
              className={cn(
                brand.className,
                "   text-[66px] md:text-[104px] text-[#A98D69] leading-[normal] font-normal py-0 my-0 h-fit"
              )}
            >
              {dictionary.enjoy}
            </h2>
            <h3
              className={cn(
                brand.className,
                " relative -top-6 md:-top-12  text-[82px] leading-[normal] md:text-[128px] text-[#A98D69] font-normal py-0 my-0 h-fit"
              )}
            >
              {dictionary.persia}
            </h3>
          </div>
          <span
            className={cn(
              harmony.className,
              "relative -top-10 md:top-auto text-5xl md:text-[92px] text-[#707070] font-normal"
            )}
          >
            {dictionary.Lovely_destination_for_your_next_travel}
          </span>
        </div>
        <Image
          className="order-1 md:order-2 h-full w-full max-w-[800px] max-h-[728px] rounded-full  "
          alt="enjoy persia "
          src={ImageHeader}
        />
      </div>
    </div>
  );
};
