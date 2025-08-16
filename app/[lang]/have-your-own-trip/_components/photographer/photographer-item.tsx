"use client"
import Image from 'next/image'
import React from 'react'
import pic from "@/public/img/user1.png"
import { RiCamera3Fill, RiFilmFill, RiAddBoxLine } from 'react-icons/ri'
import { cn } from '@/lib/utils'
import { Photographer } from '@/types'
import { usePhotographerModal } from '@/hooks/use-photographer-modal'

export const PhotographerItem = ({ handleOptionToggle, selectedOptionIds, photographer }: { handleOptionToggle: any, selectedOptionIds: any, photographer: Photographer }) => {

  const photographerModal = usePhotographerModal()
  return (
    <div
      onClick={() => photographerModal.onOpen(photographer)}
      className={cn(
        "aspect-square cursor-pointer  md:aspect-[2/1] w-full max-h-[245px]  transition-all   border border-[#A07E6280] p-3 ",
        selectedOptionIds.includes(photographer.id) && " border-rose-500 border-2 bg-rose-200/40"
      )}>
      <div className="h-full hidden md:flex gap-2 ">
        <div className=" relative h-full w-1/3">
          <Image fill className=" w-full h-full object-contain" src={photographer.avatar} alt="user" />
        </div>
        <div className="flex flex-col justify-between pt-2 gap-2 w-2/3">
          <h3 className=" font-bold capitalize text-sm text-[#594636]">
            {photographer.fullname}
          </h3>
          <p className="text-[10px] font-normal text-[#259F82]">
            ${photographer.cost} Perday
          </p>
          <p className="text-[#594636] text-[12px] font-semibold">Historic</p>
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-1">
              <RiCamera3Fill className={"w-4 h-4"} />
              <RiFilmFill className={"w-4 h-4"} />
            </div>

            <RiAddBoxLine
              onClick={(even:React.MouseEvent<SVGElement, MouseEvent>) => {
                even.stopPropagation();
                handleOptionToggle(photographer.id)}
              }
              className={"w-4 h-4 cursor-pointer"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <div className="flex flex-row justify-between gap-1">
          <div className="w-1/2 aspect-square max-w-[64px]">
            <Image
              className="w-full h-full  object-cover mb-4"
              width={64}
              height={64}
              src={photographer.avatar}
              alt="user"
            />
          </div>
          <div className="flex flex-col justify-between w-1/2">
            <div
              onClick={() => handleOptionToggle(photographer.id)}
              className="ml-auto cursor-pointer">
              <RiAddBoxLine

                className={"w-4 h-4 "} />
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
