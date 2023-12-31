import { UniversitySuccess } from '@/types'
import Image from 'next/image'
import React from 'react'

export const SuccessItem = ({ id , title , time , main_pic} : UniversitySuccess) => {
  return (
    <div className="  p-0 md:p-4 bg-white space-y-4">
      <div className="relative aspect-video">
        <Image
          alt={title}
          className="w-full h-full aspect-video"
          fill
          src={main_pic}
        />
      </div>
      <h2 className='py-1 pb-2 md:pb-1 px-2 md:px-0 text-center' >{title}</h2>
    </div>
  );
}
