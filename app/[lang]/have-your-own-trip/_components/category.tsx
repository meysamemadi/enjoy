import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import { IconType } from 'react-icons';
import { Messina_Serif } from '../../font';


interface CategoryProps {
    name: string;
    icon: IconType;
    image: string;
}

export const Category = ({ name, icon:Icon , image }: CategoryProps) => {
  return (
    <div className=" relative aspect-[1/1.51] w-full md:aspect-[1/2.5]  md:max-h-[400px]  flex flex-col items-center justify-center ">
      <Image
        fill
        className=" w-full h-full object-cover"
        alt={name}
        src={image}
      />
      <div className="flex flex-col justify-center items-center text-center px-2 z-10">
        <Icon className=" text-white w-[48px] h-[48px]" />
        <p
          className={cn(
            "text-white text-[20px] font-bold ",
            Messina_Serif.className
          )}
        >
          {name}
        </p>
      </div>

      <div className=" absolute inset-0 bg-[linear-gradient(180deg,_rgba(240,_113,_72,_0.28)_0%,_rgba(224,_55,_0,_0.70)_79.69%)]" />
    </div>
  );
}
