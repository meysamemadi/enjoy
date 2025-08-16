"use client";

import ImageHeader from "@/public/img/store/header.png";
import Image from "next/image";
import { brand, harmony, Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
export const Header = () => {
  return (
    <div className=" ">
      <div
        className={
          "flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mb-8 md:mb-12"
        }
      >
        <div className="flex flex-col text-center md:text-left order-2 md:order-1">
          <div className="flex flex-col !gap-0 ">
            <span
              className={cn(
                brand.className,
                "   text-[48px] md:text-[76px] text-[#9F7C63] font-normal py-0 my-0 h-fit"
              )}
            >
              Persian 
            </span>
            <span
              className={cn(
                brand.className,
                " text-[72px] md:text-[104px] text-[#9F7C63] font-normal py-0 my-0 h-fit"
              )}
            >
              Store
            </span>
          </div>
          <span
            className={cn(
              harmony.className,
              " text-5xl md:text-[92px] text-[#707070] font-normal"
            )}
          >
            Art of Persian hands at your home
          </span>
        </div>
        <Image
          className="order-1 md:order-2 h-full w-full max-w-[634px] max-h-[634px] rounded-full  "
          alt="enjoy persia "
          src={ImageHeader}
        />
      </div>

      <div className="flex flex-col text-center items-center justify-center w-full gap-4 md:gap-[20px]">
        <h3
          className={cn(
            "text-[#594636] text-2xl md:text-[46px] font-semibold",
            Messina_Serif.className
          )}
        >
          What is a Persian store?
        </h3>
        <p className=" max-w-[802px] mx-auto text-sm md:text-base text-[#594636] font-medium ">
        You can buy Iranian handicrafts and products with best prices and guarantee of good authentication from Enjoy Persia without travelling to Iran.
        </p>
      </div>
    </div>
  );
};
