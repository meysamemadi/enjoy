import Image from 'next/image'
import React from 'react'
import rentImg from "@/public/img/haveyorowntrip/rent-img.png"

export const ImageComponent = () => {
    return (
        <div className=' relative mt-4'>
            <Image src={rentImg} alt='Reservation of tour leader and interpreter' />
            <div className=' absolute bottom-0 bg-[rgba(6,6,6,0.60)] p-5 md:p-8 text-white'>
                <h2 className=' text-[32px] font-semibold'>Want to see somewhere?</h2>
                <p className='text-sm leading-[200%]'>Business tourism or business travel is a more limited and focused subset of regular tourism. During business tourism (traveling), individuals are still working and being paid, but are doing so away from both their workplace and home. Some definitions of tourism exclude business travel.</p>
            </div>
        </div>
    )
}
