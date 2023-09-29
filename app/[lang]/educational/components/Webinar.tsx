import React from 'react'
import webinar from "@/public/img/webinar1.png"
import Image from 'next/image'
import { Messina_Serif } from '../../font'
import { cn } from '@/lib/utils';

interface WebinarProps {
    title: string;
    subject:string;
    lang:string;
    image?:string;
    time: string

}

const Webinar : React.FC<WebinarProps> = ({
    title,
    subject,
    lang,
    image,
    time
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full ">
      <div className='w-full h-full'>
        <Image
          className=" object-cover object-center w-full h-full"
          src={webinar}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <h3
          className={cn(
            Messina_Serif.className,
            "text-[#594636] text-lg md:text-2xl font-semibold"
          )}
        >
          {title}
        </h3>
        <p className="mt-2 text-xs font-semibold text-[#A07E62]">{subject}</p>
        <div className="flex flex-col md:flex-row md:justify-between  md:mt-auto text-[#A07E62] text-xs font-semibold ">
          <span>{lang}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default Webinar