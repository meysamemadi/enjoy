import Image from 'next/image';
import React from 'react'

interface ProvinceItemProps {
  id : number;
  name: string;
  image: string;
}
export const ProvinceItem = ({id , name , image}: ProvinceItemProps) => {
  return (
    <div>
      <div className=" relative aspect-[1.32/1] max-h-[352px]">
        <Image
          fill
          className="w-full h-full object-cover"
          alt={name}
          src={image}
        />
      </div>
      <div className=" capitalize text-center text-sm md:text-base font-bold leading-[160%] text-[#594636] py-3 md:py-[18px] bg-white">
        {name}
      </div>
    </div>
  );
}
