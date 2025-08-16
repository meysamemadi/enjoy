'use client'


import style from "@/app/[lang]/styles/visa.module.css"
import ImageHeader from "@/public/img/base/visa.png"
import Image from "next/image";
import { brand , harmony , Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
export const Header = () => {
  return (
    <div className=" container mx-auto">
      <div
        className={cn(
          "flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mb-8 md:mb-12",
          style.header_tourism
        )}
      >
        <div className="flex flex-col text-center md:text-left order-2 md:order-1">
          <span
            className={cn(
              brand.className,
              " text-[66px] md:text-[110px] text-[#594636] font-normal"
            )}
          >
            Visa &
          </span>
          <span
            className={cn(
              brand.className,
              " text-[50px] md:text-[72px] text-[#594636] font-normal"
            )}
          >
            travel  ticket
          </span>
          <span
            className={cn(
              harmony.className,
              " text-5xl md:text-[92px] text-[#707070] font-normal"
            )}
          >
            Touch your dreams in Persia
          </span>

          <p className="text-sm leading-[140%] text-[#594636] font-medium max-w-[446px] mt-6">
          Enjoy Persia as a sub-branch of Raha commercial group (rahabusiness.com) is a tourism company that delivers the most diverse amusement and traveling services with cooperation of big community of Iran tourism. By such services that are delivered to tourists for the first time in Iran
          </p>
        </div>
        <Image
          className="order-1 md:order-2 h-full w-full max-w-[634px] max-h-[504px] rounded-full  "
          alt="enjoy persia "
          src={ImageHeader}
        />
      </div>
    </div>
  );
};