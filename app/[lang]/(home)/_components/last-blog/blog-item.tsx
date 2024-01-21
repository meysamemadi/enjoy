import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogItemProps {
    id: number;
    title: string;
    description: string;
    image: string
}

export const BlogItem = ({id , title , description , image} : BlogItemProps) => {
  return (
    <div>
      <div className=" relative aspect-[1.35/1]">
        <Image fill className=" w-full h-full object-cover" alt={title} src={image} />
      </div>
      <div className="p-[10px] md:p-[24px] bg-white">
        <h2 className="text-sm md:text-lg font-bold leading-[normal] text-[#594636]">
          {title}
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#594636] leading-[200%] font-medium line-clamp-5 md:line-clamp-3">
          {description}
        </p>
        <Link href={""} className=" text-[#A98D69] text-xs font-bold leading-[200%] underline underline-offset-2">
          Read more ...
        </Link>
      </div>
    </div>
  );
}
