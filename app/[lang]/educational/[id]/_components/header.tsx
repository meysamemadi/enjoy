'use client'

import Image from "next/image";

interface HeaderProps {
    title : string;
    bg_image : string;
    boards : string[]
}

const Header = ({
    title,
    bg_image,
    boards
}: HeaderProps) => {
    return (
      <div className="container mx-auto">
        <div className={`w-full h-96 relative flex flex-col items-center `}>
          <Image className=" z-[1]" alt="" fill src={bg_image} />
          <div className=" bg-gradient-to-t from-[#FAF5EF] to-transparent absolute inset-0  z-[2]" />
        </div>
        <div className="flex flex-col items-center -mt-[10px] md:-mt-[10px] z-50">
          <h2 className="mb-[34px] mb[46px] text-[26px] md:text-[48px] font-bold text-[#594636]">
            {title}
          </h2>
          <div className="flex flex-wrap items-center md:justify-center md:gap-y-6">
            {boards &&
              boards.map((item, index) => (
                <div
                  className=" relative flex flex-nowrap  gap-4  md:basis-1/3 text-center"
                  key={index}
                >
                  <div className=" self-center  w-[24px] md:w-[70px] h-[4px]  bg-[#a07e62]" />
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
}
 
export default Header;