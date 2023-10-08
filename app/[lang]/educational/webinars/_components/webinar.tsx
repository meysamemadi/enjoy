'use client'

import Image from "next/image";
import webinar from "@/public/img/webinar100.png"
import { title } from "process";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "@/app/[lang]/font";
interface WebinarProps {
    title : string;
    author : string;
    start_at : string;
}

const Webinar = ({
    title,
    author,
    start_at
} : WebinarProps) => {
    return (
      <div className="bg-white p-2 md:p-4 lg:p-6">
        <div className=" aspect-video">
          <Image
            className="obect-cover w-full h-full"
            src={webinar}
            alt={title}
          />
        </div>
        <h3
          className={cn(
            Messina_Serif.className,
            "mt-2 md:mt-3 lg:mt-4 text-xs md:text-lg lg:text-2xl font-semibold capitalize text-[#33281F]"
          )}
        >
          {title}
        </h3>
        <p className="text-[6.5px] md:text-[10px] lg:text-[13px] text-[#594636] capitalize font-semibold ">
          by : {author}
        </p>
        <p className="text-[7.5px] md:text-[10px] lg:text-[16px] font-semibold text-[#A07E62] capitalize">
          {start_at}
        </p>
      </div>
    );
}
 
export default Webinar;