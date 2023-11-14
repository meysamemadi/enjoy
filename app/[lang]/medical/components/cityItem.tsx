'use client'

import { cn } from "@/lib/utils"
import city from "@/public/img/city.png"
import Image from "next/image"
import { Messina_Serif } from "../../font"
import { useParams, useRouter } from "next/navigation"

const CityItem = ({name , image}:{
    name:string,image:string
}) => {

    const router = useRouter();
    const params = useParams();

    return (
      <div
        onClick={() => router.push(`${params.lang}/medical/city/1`)}
        className=" cursor-pointer h-[132px] md:h-[240px] flex flex-col items-center justify-center gap-[8px] md:gap-5"
      >
        <Image alt={name} src={city} />

        <h3
          className={cn(
            Messina_Serif.className,
            "capitalize text-[#594636] text-lg md:text-[22px] lg:text-[26px] font-normal"
          )}
        >
          {name}
        </h3>
      </div>
    );
}
 
export default CityItem;