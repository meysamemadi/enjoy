import Image from 'next/image'
import React from 'react'
import cart1 from "@/public/image/cart1.png"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Minus, Plus } from 'lucide-react'

export const ProductItem = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between px-4 lg:px-8 py-6 bg-white'>
            <div className='flex items-center'>
                <span className=' font-semibold text-[#594636] mr-4 lg:mr-8'>1</span>
                <div className='flex flex-1 items-center'>
                    <Image src={cart1} width={64} height={64} alt='' />
                    <div className='flex flex-col ml-2 lg:ml-4'>
                        <h3 className=' text-base lg:text-2xl capitalize font-semibold text-[#A07E62]'>Original Iranian dining cup</h3>
                        <p className=' text-sm lg:text-lg font-semibold text-[#259F82]'>$169.43</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-[40px] self-end md:self-auto'>

                <div className='flex gap-5 text-[#594636]'>
                    <button><Plus className=' w-6 h-6 text-[#594636]' /></button>
                    <span>1</span>
                    <button><Minus className=' w-6 h-6 text-[#594636]' /></button>

                </div>

                <button className='w-8 h-8 bg-[rgba(204,204,204,0.20)] p-2 '>
                    <RiDeleteBin6Fill className='w-4 h-4 text-[rgba(235,87,87,1)]' />
                </button>

            </div>

        </div>
    )
}
