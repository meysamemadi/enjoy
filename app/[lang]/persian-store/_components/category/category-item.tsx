import Image from 'next/image'
import React from 'react'
import c1 from "@/public/image/c1.jpg"

interface Category {
  id: number;
  title: string;
  image: string;
  onSelect: (id: number) => void;
}

export const CategoryItem = ({
    id,
    title,
    image,
    onSelect
}:Category) => {
  return (
    <div 
    className=' cursor-pointer max-h-[156px] max-w-[168px]  md:max-h-[230px] md:max-w-[258px] w-full h-full bg-white flex flex-col gap-4 p-4'
    onClick={() => onSelect(id)}
    >
        <Image
            width={400}
            height={500} 
            alt=''
            className=' w-full h-full object-cover'
            src={image}
        />
        <p className=' text-sm font-semibold text-[#594636] text-center'>
        {title}
        </p>
    </div>
  )
}
