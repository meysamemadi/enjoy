"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

export const Info = () => {

    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

  return (
    <div className=' relative mt-4'>
        <div className={cn(
                "overflow-hidden transition-[max-height] duration-300 ease-in-out text-[#594636] text-sm font-semibold leading-[200%]",
                open ? "max-h-[1000px]" : "max-h-[200px]"
            )}>

note: Our experts will message you after choosing product. First, you pay 15 percent and then we will provide it and send photo and video of it. After confirming authentication and health of commodity, you pay the remainder and the product will be sent to you.note: Our experts will message you after choosing product. First, you pay 15 percent and then we will provide it and send photo and video of it. After confirming authentication and health of commodity, you pay the remainder and the product will be sent to you.note: Our experts will message you after choosing product. First, you pay 15 percent and then we will provide it and send photo and video of it. After confirming authentication and health of commodity, you pay the remainder and the product will be sent to you.

            </div>
            <button
                onClick={handleToggle}
                className={cn(
                    "flex font-semibold text-sm leading-[200%] justify-center items-center w-full text-[#594636] absolute left-0  h-[56px]  cursor-pointer",
                    open ? "-bottom-10" : "bg-custom-gradient bottom-0 "
                )}
                aria-expanded={open}
                aria-controls="facilities-list"
            >
                {open ? (
                    <>
                        See less
                    </>
                ) : (
                    <>
                        See more
                    </>
                )}
            </button>
    </div>
  )
}
