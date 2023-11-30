'use client'
import Lottie from "lottie-react";
import madar from "@/public/madar.json"
import ImageHeader from "@/public/img/image.svg"
import Image from "next/image";
import { brand , harmony , Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import { MotionP, MotionSpan } from "../../components/motion";
import useDirection from "../../components/direction";
import style from "@/app/[lang]/styles/educational.module.css"
// import { useInView } from "framer-motion";

import {variantsMoveLeft, variantsVisible} from "@/lib/variants"

 

const Header = ({
  dictionary,
}: {
  dictionary: {
    What_is_Educational_Tour: string;
    Educational_Tour: string;
    Educational_Tour_desc: string;
    header_discription: string;
  };
}) => {



  const direction = useDirection();
 

  return (
    <div className=" container  ">
      <div
        className={cn(
          "flex flex-wrap md:flex-nowrap gap-2 justify-between items-center mb-8 md:mb-12",
          style.header_education
        )}
      >
        <div className="flex flex-col gap-2 order-2 md:order-1 mt-[18px] md:mt-0 z-[1]">
          <MotionSpan
            variants={variantsVisible}
            initial="hidden"
            animate="visible"
            transition={{
              ease: "easeInOut",
              // duration: 0.3,
            }}
            className={cn(
              brand.className,
              " capitalize text-5xl md:text-[76px] text-[#497D59] font-normal",
              direction && " text-center md:text-right",
              !direction && "text-center md:text-left"
            )}
          >
            {dictionary.Educational_Tour}
          </MotionSpan>
          <MotionSpan
            variants={variantsVisible}
            initial="hidden"
            animate="visible"
            transition={{
              ease: "easeInOut",
              // duration: 0.5,
            }}
            className={cn(
              harmony.className,
              " text-5xl md:text-[64px] text-[#707070] font-normal",
              direction && " text-center md:text-right",
              !direction && "text-center md:text-left"
            )}
          >
            {dictionary.Educational_Tour_desc}
          </MotionSpan>
        </div>
        <Image
          className="order-1 md:order-2 z-[1]  "
          alt="enjoy persia"
          src={ImageHeader}
        />
      </div>
      <MotionP
        variants={variantsMoveLeft}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          // duration: 0.3,
        }}
        className={cn(
          Messina_Serif.className,
          "z-[2] relative  text-center text-[#594636] text-2xl md:text-[46px]"
        )}
      >
        {dictionary.What_is_Educational_Tour}
      </MotionP>
      <MotionP
        variants={variantsVisible}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          // duration: 0.3,
        }}
        className=" relative z-[2] text-center text-[#594636] font-medium mt-4 md:mt-5 max-w-[802px] mx-auto"
      >
        {dictionary.header_discription}
      </MotionP>
    </div>
  );
};

export default Header;
