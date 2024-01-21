import { Messina_Serif } from '@/app/[lang]/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

interface ItemProps {
    id: number;
    name: string;
    image: string;
    className?: string;
}


export const Item = ({
    id,
    name,
    image,
    className
}: ItemProps) => {
  return (
    <div
      className={cn(
        " relative aspect-[1.12/1] md:aspect-[1.25/1] bg-red-300 max-h-[206px] w-full ",
        className
      )}
    >
      <div className="after:absolute after:content-[''] after:w-full after:h-full after:inset-0 after:bg-[rgba(21,21,21,0.50)]">
        <Image fill className={className ? " w-full h-full object-cover" : "object-fill" } alt="" src={image} />
      </div>
      <span
        className={cn(
          " capitalize absolute -left-2 bottom-3 md:bottom-4 text-xs md:text-[24px] p-2 bg-[rgba(21,21,21,0.70)] text-white z-10 ",
          Messina_Serif.className
        )}
      >
        {name}
      </span>
    </div>
  );
}
