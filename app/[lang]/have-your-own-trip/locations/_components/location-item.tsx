import Image from 'next/image';
import React from 'react'
import { RiMapPin2Fill } from 'react-icons/ri';

interface LocationItemProps {
  id: number;
  title: string;
  image: string;
}

export const LocationItem = ({id , title , image}: LocationItemProps) => {
  return (
    <div className=" bg-white aspect-[1.04/1] p-2 md:p-4 space-y-2 md:space-y-4 flex flex-col">
      <div className="relative w-full h-full">
        <Image
          fill
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <h2 className="text-[10px] gap-1 flex items-center md:text-base font-semibold text-[#594636] hover:text-[#F07148]">
        <RiMapPin2Fill className="w-4 h-4" />  {title}
      </h2>
    </div>
  );
}
