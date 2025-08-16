'use client'
import Lottie from "lottie-react";
import madar from "@/public/madar.json"
import ImageHeader from "@/public/img/health_tour.png"
import Image from "next/image";
import { brand , harmony , Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import DescriptionCollapse from "./DescriptionCollapse";
const Header = ({
  dictionary,
}: {
  dictionary: {
    Medical_Tourism_description: string;
    Medical_Tour: string;
    Medical_Tour_desc: string;
    Medical_Tourism_in_Iran: string;
  };
}) => {
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
            {dictionary.Medical_Tour}
          </span>
          <span
            className={cn(
              harmony.className,
              " text-5xl md:text-[64px] text-[#707070] font-normal"
            )}
          >
            {dictionary.Medical_Tour_desc}
          </span>
        </div>
        <Image
          className="order-1 md:order-2  "
          alt="enjoy persia"
          src={ImageHeader}
        />
      </div>
      <p
        className={cn(
          Messina_Serif.className,
          "  text-center text-[#594636] text-2xl md:text-[46px]"
        )}
      >
        {dictionary.Medical_Tourism_in_Iran}
      </p>
      <DescriptionCollapse text={dictionary.Medical_Tourism_description} />
      {/* <p className="text-center font-medium mt-4 md:mt-5 max-w-[880px] mx-auto line-clamp-3">
        {dictionary.Medical_Tourism_description}
      </p> */}
    </div>
  );
};

export default Header;
