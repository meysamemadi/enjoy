'use client'
import Image from 'next/image'
import React from 'react'
import free_consultation from "@/public/img/Free_consultation_medical.png"
import medicalImg from "@/public/img/medical/medical.png"
import { Messina_Serif } from '../../font'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams } from 'next/navigation'
const FreeConsultation = ({
  dictionary,
}: {
  dictionary: {
    Free_consultation: string;
    Free_consultation_description:string;
  };
}) => {

  const params = useParams();

  return (
    <div className="container flex flex-wrap gap-2 md:flex-nowrap justify-between items-center">
      <div className="flex order-2 md:order-1 flex-col relative bottom-[100px] md:bottom-auto">
        <h4
          className={cn(
            "text-2xl md:text-[64px] font-semibold text-[#43B8A2] mb-4 capitalize",
            Messina_Serif.className
          )}
        >
          {dictionary.Free_consultation}
        </h4>
        <p className=" leading-[200%] mt-4 mb-6 md:mb-[40px] text-sm font-medium text-[#594636] max-w-[556px]">
          {dictionary.Free_consultation_description}
        </p>
        <Link
          className={cn(
            "py-4 capitalize px-12 text-[22px] bg-[#43B8A2] text-center font-bold text-white w-full md:w-fit ",
            Messina_Serif.className
          )}
          href={`/${params.lang}/medical/free-consultation`}
          title={dictionary.Free_consultation}
        >
          {dictionary.Free_consultation}
        </Link>
      </div>
      <div className=" relative order-1 md:order-2 after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(180deg,_rgba(250,_245,_239,_0.00)_0%,_#FAF5EF_92.93%)] md:after:bg-none">
        <Image src={medicalImg} alt={dictionary.Free_consultation} />
      </div>
    </div>
  );
};

export default FreeConsultation