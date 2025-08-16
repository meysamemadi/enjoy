import Image from 'next/image'
import React from 'react'
import img from "@/public/img/haveyorowntrip/banner.png"
export const Banner = () => {
  return (
    <div className=' container max-h-[380px] h-full w-full relative'>
        
        <Image alt='' src={img} className='w-full h-full object-cover' />
    </div>
  )
}
