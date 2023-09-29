import Image from 'next/image'
import React from 'react'
import uni from "@/public/img/uni.png"
import { montserrat } from '../../font'
import { cn } from '@/lib/utils'
import Link from 'next/link'
const University = () => {
  return (
    <div className=" p-2 md:p-4 bg-white flex flex-col">
      <div className="relative">
        <Image src={uni} alt="test" className="  w-full h-full object-cover" />
      </div>
      <h3
        className={cn(
          "my-4 text-[14px] md:text-[17px] font-bold text-[#594636]",
          montserrat.className
        )}
      >
        Tehran University
      </h3>
      <ul className="list-disc list-inside text-[#594636] text-xs md:text-sm">
        <li className="truncate">Computer Science</li>
        <li className="truncate">Communications</li>
        <li className="truncate">Business</li>
      </ul>
      <Link className="my-2 md:my-4 text-xs md:text-sm text-[#A98D69] font-medium underline" href={"/"}>
        Read more ...
      </Link>
    </div>
  );
}

export default University