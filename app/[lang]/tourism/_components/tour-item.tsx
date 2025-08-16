"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {Tour} from "@/types";
import {Star} from "lucide-react";
import {AiFillStar} from "react-icons/ai";
import {useParams} from "next/navigation";



const TourItem = ({
    id,
    title,
    image,
    rating,
    price,
    days,
    start_in
}:Tour) => {

    const { lang } = useParams();


    return (
      <div className=" px-4 pt-4 pb-6 bg-white">
        <div className="flex flex-col">
          <div className=" relative max-h-[320px] aspect-square">
            <Image
              fill
              className="  w-full h-full object-center object-cover"
              src={image}
              alt={title}
            />
              <span className="bg-[rgba(0,0,0,0.70)] flex items-center gap-1 text-white absolute right-4 bottom-4 py-[6px] px-2 font-normal">
                  {rating}
                  <AiFillStar size={16} />
              </span>
          </div>
          <h2 className=" text-[22px] font-bold text-[#594636]">
            {title}
          </h2>
          <div className="flex gap-1 my-2 md:my-4">
            <span className="text-[8px] md:text-[14px] font-medium text-[#594636] ">
              {days} days
            </span>
            {start_in && (
              <span className="text-[8px] md:text-[14px] font-medium text-[#594636]">
                <span className="text-[8px] md:text-[14px] font-medium text-[#A07E62]">
                  Starts in:
                </span>
                {start_in}
              </span>
            )}
          </div>
          <span className="text-base md:text-[20px] font-semibold text-[#259F82]">
            {price}
          </span>
          <Separator className="my-6" />
          <div className="flex items-center justify-center ">
            <Link href={`/${lang}/tourism/${id}`} title={title}>
              <span className="text-[15px] capitalize font-semibold text-[#594636] ">
                see detail
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
}
 
export default TourItem;