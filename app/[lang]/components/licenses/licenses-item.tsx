import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'


interface LicensesItemProps {
    name: string;
    image: string;
    width?: number;
    height?: number;
}

export const LicensesItem = ({name , image , width , height}: LicensesItemProps) => {
  return (
    <div className=' bg-white transition-all hover:border-2 border-[#A07E62] flex items-center gap-2 justify-center p-4'>
        <Image width={width} height={height} className='' src={image} alt={name} />
        <span className={cn('text-[#A07E62] text-xs font-bold max-w-[180px] text-center')}>{name}</span>
    </div>
  )
}
