'use client'

import Image from "next/image"
import abe_garm from "@/public/img/abe_garm.png";

import { RiMapPin2Fill } from "react-icons/ri";

interface NaturopathyItemProps {
    name: string;
    location: string;
    image?: string;
};

const NaturopathyItem = ({name,location,image}:NaturopathyItemProps) => {
    return (
      <div className=" h-[252px] flex flex-col">
        <div className=" w-[164px] h-[164px]">
          <Image
            className="object-cover w-full h-full"
            src={abe_garm}
            alt={name}
          />
        </div>
        <p className="text-[#594636] text-sm font-medium self-start p-[8px] capitalize">
          {name}
        </p>
        <p className="flex gap-1 p-[8px] pt-0 items-center text-[#594636] text-sm font-medium leading-[200%] capitalize">
          <RiMapPin2Fill />
          {location}
        </p>
      </div>
    );
}
 
export default NaturopathyItem;