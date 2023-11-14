'use client'

import { IconType } from "react-icons";

interface FacilityProps {
    name: string;
    icon: IconType
}

const Facility = ({name , icon:Icon}: FacilityProps) => {
    return (
      <div className=" group cursor-pointer  flex flex-col items-center justify-items-center h-[127px] md:h-[233px] px-[6px] md:px-[10px] py-[11px] md:py-[34px] gap-4 justify-center">
        <div className=" w-[42.5px] md:w-[68px] h-[40px] md:h-[64px] relative after:w-6 after:h-6 after:absolute after:bottom-0 after:left-0 after:bg-[#E3FFFA]  ">
          <Icon className=" relative w-[40px] h-[40px] md:w-[64px] md:h-[64px] z-[9999] text-[#43B8A2] " />
        </div>
        <h3 className=" text-center text-[#594636] hover:text-blue-500 group-hover:text-[#43B8A2]  group-hover:underline text-[10px] md:text-[14px] font-bold capitalize leading-normal">
          {name}
        </h3>
      </div>
    );
}
 
export default Facility;