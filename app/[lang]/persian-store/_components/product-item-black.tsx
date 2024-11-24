import Image from 'next/image'
import React from 'react'
import p1 from "@/public/image/p1.jpg"
import { Plus } from 'lucide-react'

interface ProductItemBlackProps {
    
        id: number;
        name: string;
        price: number;
        old_price: number;
        image: string;
      
}

export const ProductItemBlack = ({id , name , price , old_price , image}: ProductItemBlackProps) => {
    return (
        <div className=' relative  bg-[#0B0A0F] h-full w-full flex flex-col p-2 lg:p-4'>

            <button className=' w-6 h-6 absolute top-4 left-4 flex items-center justify-center bg-[rgba(169,141,105,0.10)] border border-[rgba(198,178,161,1)] p-1'>
                <Plus className=' text-[rgba(198,178,161,1)]' />
            </button>

            <Image src={image} width={258} height={258} className='w-full h-full object-cover' alt='' />




            <div className='mt-2'>
                <p className='my-2  leading-[normal] line-clamp-1 md:line-clamp-2 text-white font-bold'>
                    {name}
                </p>

                <p className=' text-[10px] text-[#CBCBCB] font-semibold  line-through'>${price}</p>
                <p className=' text-[#A07E62] font-semibold'>${old_price}</p>
            </div>

        </div>
    )
}
