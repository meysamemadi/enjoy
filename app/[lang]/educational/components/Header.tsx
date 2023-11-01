'use client'
import Lottie from "lottie-react";
import madar from "@/public/madar.json"
import ImageHeader from "@/public/img/image.svg"
import Image from "next/image";
import { brand , harmony , Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
const Header = () => {


    
  return (
    <div className=" container">
      <div className=" flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mb-8 md:mb-12">
        <div className="flex flex-col gap-2 order-2 md:order-1">
          <span
            className={cn(
              brand.className,
              " text-5xl md:text-7xl text-[#497D59] font-normal"
            )}
          >
            Educational Tour
          </span>
          <span
            className={cn(
              harmony.className,
              " text-5xl md:text-[64px] text-[#707070] font-normal"
            )}
          >
            Studying in the land of extraordinary attractions and beauties!
          </span>
        </div>
        <Image className="order-1 md:order-2  " alt="test" src={ImageHeader} />
      </div>
      <p
        className={cn(
          Messina_Serif.className,
          "  text-center text-[#594636] text-2xl md:text-[46px]"
        )}
      >
        What is “Educational Tour”?
      </p>
      <p className="text-center font-medium mt-4 md:mt-5">
        Whether you travel with your family or alone, do not worry about which
        places to visit, where to stay at night, where to go shopping and how to
        find a tour leader and interpreter. Ask anything from us:
      </p>
    </div>
  );
};

export default Header;
