import React from 'react'
import { Modal } from "@/components/ui/modal";
import { usePhotographerModal } from '@/hooks/use-photographer-modal';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { RiCloseLine } from 'react-icons/ri';
import { PhotographerCarousel } from './photographer-carousel';

export const PhotographerModal = () => {

  const photographerModal = usePhotographerModal();
  const photographer = photographerModal.photographer;

  if (!photographer)
    return null;



  const cityNames = photographer.cities.length
  ? photographer.cities.map(city => city.name).join(", ")
  : "No cities available";

  return (
    <Modal title="Photographers and cameramans" className=' xl:max-w-[1100px]' isOpen={photographerModal.isOpen} onClose={photographerModal.onClose}>
      <div className='flex flex-col border-t border-t-[rgba(160,126,98,0.30)] pt-4'>

        <p className='text-[12px] text-[#594636] leading-[160%] font-medium'>
          -Choose one to three persons from the list below. We will introduce one to you according to your preference based on their availability.
        </p>
        <p className='text-[12px] text-[#594636] leading-[160%] font-medium'>

          -If you could not find that person, inform us through whatsapp or vip+ . We will introduce to you the required person.</p>

        <div className=' relative mt-[80px]'>


          <div className=" flex flex-col md:border border-[rgba(160,126,98,0.50)] relative z-10">
            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2 z-20">
              <Image
                width={99}
                height={99}
                alt={photographer.fullname}
                src={photographer.avatar}
                className="mx-auto"
              />
            </div>

            <div className='flex flex-col mt-[30px] text-center'>
              <h2 className='  text-[20px] lg:text-[34px] text-[#594636] capitalize font-normal '>{photographer.fullname}</h2>
              <p className='text-xs font-semibold capitalize text-[#A07E62]'>Photography Style: {photographer.style}</p>
              <p className='text-sm text-[#259F82 font-bold capitalize]'>{photographer.cost}</p>
            </div>

            <div className=' grid md:grid-cols-2 gap-2 mt-4 md:p-4'>

              <div className='flex gap-2 items-center'>
                <div className='w-2 h-2 bg-[#A07E62]' />
                <span className='text-[#A07E62] font-semibold capitalize text-xs'>Language:</span>
                <span className='text-xs font-semibold capitalize text-[#594636]'>{photographer.language}</span>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='w-2 h-2 bg-[#A07E62]' />
                <span className='text-[#A07E62] font-semibold capitalize text-xs'>Free days on week:</span>
                <span className='text-xs font-semibold capitalize text-[#594636]'>{photographer.free_days}</span>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='w-2 h-2 bg-[#A07E62]' />
                <span className='text-[#A07E62] font-semibold capitalize text-xs'>Available Cities:</span>
                <span className='text-xs font-semibold capitalize text-[#594636]'>{cityNames}</span>
              </div>


              <div className='flex gap-2 items-center'>
                <div className='w-2 h-2 bg-[#A07E62]' />
                <span className='text-[#A07E62] font-semibold capitalize text-xs'>   camera:</span>
                <span className='text-xs font-semibold capitalize text-[#594636]'>{photographer.camera}</span>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='w-2 h-2 bg-[#A07E62]' />
                <span className='text-[#A07E62] font-semibold capitalize text-xs'>   Video camera:</span>
                <span className='text-xs font-semibold capitalize text-[#594636]'> {photographer.video_camera}</span>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='w-2 h-2 bg-[#A07E62]' />
                <span className='text-[#A07E62] font-semibold capitalize text-xs'>   Quadcopter:</span>
                <span className='text-xs font-semibold capitalize text-[#594636]'>{photographer.quadcopter ? <Check size={16} />: <RiCloseLine className='w-4 h-4' />} </span>
              </div>

            </div>

            <PhotographerCarousel images={photographer.images} />

          </div>
        </div>

      </div>
    </Modal>
  )
}
