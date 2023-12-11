import Image from 'next/image'
import React from 'react'
import free_consultation from "@/public/img/Free_consultation.png"
import { Messina_Serif } from '../../font'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import style from "@/app/[lang]/styles/educational.module.css"

const FreeConsultation = () => {
  return (
    <div
      className={cn(
        "container grid grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[70px] lg:mt-[160px] gap-0 md:gap-2 md:flex-nowrap justify-between items-center"
      )}
    >
      <div className=" mb-[50px] md:top-0 flex order-2 md:order-1 flex-col z-[2]">
        <h4
          className={cn(
            "text-2xl md:text-[64px] font-semibold text-[#497D59]",
            Messina_Serif.className
          )}
        >
          Free consultation
        </h4>
        <p className=" mt-4 mb-6 md:mb-[40px] text-sm font-medium text-[#594636]">
          Enjoy pershia can provide your medical services in any city you like.
          You can even get advice from us and it will be completely free.
        </p>
        <Link
          className={cn(
            "py-4 px-12 text-[22px] bg-[#497D59] text-center font-bold text-white w-full md:w-fit ",
            Messina_Serif.className
          )}
          href={"/"}
          title="Free consultation"
        >
          Free consultation
        </Link>
      </div>
      <div
        className={cn( style.freeConsultation," relative w-full h-full   order-1 md:order-2")}
      >
        <Image
          className="md:absolute mx-auto  -bottom-[57px] right-[50px]    "
          src={free_consultation}
          alt="Free consultation"
        />
      </div>
    </div>
  );
}

export default FreeConsultation