"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { RiBuilding4Fill } from "react-icons/ri"

export const Facilities = ({ facilities }: { facilities: string[] }) => {

    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div className='mt-6  bg-[#FAF5EF] p-4 md:p-6 flex gap-4 relative'>

            <RiBuilding4Fill className="w-12 h-12 flex-shrink-0" />

            <div className={cn(
                "flex gap-2 flex-wrap overflow-hidden transition-[max-height] duration-300 ease-in-out",
                open ? "max-h-[1000px]" : "max-h-[30px]"
            )}>
                {facilities.map(facility => <span className="px-2 py-2 bg-[#594636] text-white text-sm font-normal capitalize" key={facility}>{facility}</span>)}


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
