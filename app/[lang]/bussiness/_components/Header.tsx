'use client'


import style from "@/app/[lang]/styles/tourism.module.css"
import ImageHeader from "@/public/img/bussiness/header.png"
import Image from "next/image";
import { brand , harmony , Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
export const Header = ({
  dictionary,
}: {
  dictionary: {
    Tourism: string;
    Tour: string;
    Touch_your_dreams_in_Persia: string;
  };
}) => {
  return (
    <div className=" container">
      <div
        className={cn(
          "flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mb-8 md:mb-12"
        )}
      >
        <div className="flex flex-col text-center md:text-left order-2 md:order-1">
          <span
            className={cn(
              brand.className,
              " text-[66px] md:text-[110px] text-[#2697AD] font-normal"
            )}
          >
            business
          </span>
          <span
            className={cn(
              brand.className,
              " text-[82px] md:text-[140px] text-[#2697AD] font-normal"
            )}
          >
            {dictionary.Tour}
          </span>
          <span
            className={cn(
              harmony.className,
              " text-5xl md:text-[92px] text-[#707070] font-normal"
            )}
          >
           The most specialized industrial trips with Enjoy Persia
          </span>
        </div>
        <Image
          className="order-1 md:order-2 h-full w-full max-w-[634px] max-h-[634px] rounded-full  "
          alt="enjoy persia "
          src={ImageHeader}
        />
      </div>
    </div>
  );
};