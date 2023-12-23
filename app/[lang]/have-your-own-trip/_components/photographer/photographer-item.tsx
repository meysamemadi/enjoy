import Image from 'next/image'
import React from 'react'
import pic from "@/public/img/user1.png"
import { RiCamera3Fill , RiFilmFill  , RiAddBoxLine } from 'react-icons/ri'

export const PhotographerItem = () => {
  return (
    <div className=" aspect-square  md:aspect-[2/1] w-full max-h-[245px]   border border-[#A07E6280] p-3 ">
      <div className="h-full hidden md:flex gap-2 ">
        <div className=" relative h-full w-1/3">
          <Image fill className=" w-full h-full object-contain" src={pic} alt="user" />
        </div>
        <div className="flex flex-col justify-between pt-2 gap-2 w-2/3">
          <h3 className=" font-bold capitalize text-sm text-[#594636]">
            alireza mohammadi
          </h3>
          <p className="text-[10px] font-normal text-[#259F82]">
            $928.41 Perday
          </p>
          <p className="text-[#594636] text-[12px] font-semibold">Historic</p>
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-1">
              <RiCamera3Fill className={"w-4 h-4"} />
              <RiFilmFill className={"w-4 h-4"} />
            </div>

            <RiAddBoxLine className={"w-4 h-4"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <div className="flex flex-row justify-between gap-1">
          <div className="w-1/2 aspect-square max-w-[64px]">
            <Image
              className="w-full h-full  object-cover"
              src={pic}
              alt="user"
            />
          </div>
          <div className="flex flex-col justify-between w-1/2">
            <div className="ml-auto">
              <RiAddBoxLine className={"w-4 h-4"} />
            </div>
            <div className="mr-auto flex space-x-1 ">
              <RiCamera3Fill className={"w-4 h-4"} />
              <RiFilmFill className={"w-4 h-4"} />
            </div>
          </div>
        </div>
        <h3 className=" font-bold capitalize text-sm text-[#594636]">
          alireza mohammadi
        </h3>
        <p className="text-[10px] font-normal text-[#259F82]">$928.41 Perday</p>
        <p className="text-[#594636] text-[12px] font-semibold">Historic</p>
      </div>
    </div>
  );
}
