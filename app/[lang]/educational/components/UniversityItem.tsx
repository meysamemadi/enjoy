'use client'
import Image from 'next/image'
import React from 'react'
import uni from "@/public/img/uni.png"
import { montserrat } from '../../font'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Category, Language } from '@/types'
import { useParams } from 'next/navigation'

interface UniversityItemProps {
  id: number;
  title: string;
  description: string;
  categories: Category[];
  main_pic: string;
  bg_pic: string;
  lang: Language;
}
const UniversityItem = ({
  id,
  title,
  description,
  categories,
  main_pic,
  bg_pic,
  lang
}:UniversityItemProps) => {

  const params = useParams()
  return (
    <div className=" p-2 md:p-4 bg-white flex flex-col">
      <div className="relative">
        <Image
          src={main_pic}
          alt="test"
          width={300}
          height={300}
          className="  w-full h-full object-cover"
        />
      </div>
      <h3
        className={cn(
          "my-4 text-[14px] md:text-[17px] font-bold text-[#594636]",
          montserrat.className
        )}
      >
        {title}
      </h3>
      <ul className=" line-clamp-3 list-disc list-inside text-[#594636] text-xs md:text-sm">
        {categories.map((category) => (
          <li key={category.id} className="truncate">{category.title}</li>
        ))}
      </ul>
      <Link
        className="my-2 md:my-4 text-xs md:text-sm text-[#A98D69] font-medium underline"
        href={`/${params.lang}/educational/${id}`}
      >
        Read more ...
      </Link>
    </div>
  );
}

export default UniversityItem;