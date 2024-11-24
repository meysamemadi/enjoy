import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export const Title = () => {
    return (
        <div className='  mt-6 lg:mt-[56px] pb-3 flex items-center justify-between  container border-b border-[rgba(160,126,98,0.30)]'>
            <span className='capitalize text-lg lg:text-[32px] font-semibold text-[#594636]'>
                157 products
            </span>

            <div className='flex items-center text-sm font-semibold text-[#9F7C63] capitalize gap-3'>
                <span className=' capitalize'>sorted by</span>

                <Link href="">
                    top views
                </Link>

                <Link   className={cn(
            "relative  transition-colors",
            "after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-1 after:bg-[#9F7C63]"
          )} href="">
                    newest
                </Link>

                <Link href="">
                    Price
                </Link>
            </div>
        </div>
    )
}
