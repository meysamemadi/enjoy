"use client";
import Image from "next/image";
import React from "react";
import uni from "@/public/img/uni.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Category, Language } from "@/types";
import { useParams } from "next/navigation";
import { UniversityItemCarousel } from "./univercity-item-carousel";
import { MotionDiv } from "@/app/[lang]/components/motion";
import { montserrat } from "@/app/[lang]/font";

interface UniversityItemProps {
  id: number;
  title: string;
  description: string;
  categories: Category[];
  main_pic: string;
  bg_pic: string;
  lang: Language;
  index: number;
}
export const UniversityItem = ({
  id,
  title,
  description,
  categories,
  main_pic,
  bg_pic,
  lang,
  index,
}: UniversityItemProps) => {
  const params = useParams();
  return (
    <div

      className=" p-2 md:p-4 bg-white aspect-[1/2] md:aspect-[1.5/1] flex flex-col h-full max-h-[700px]"
    >
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
          "my-4 text-[14px] md:text-[17px] h-[45px]   font-bold text-[#594636]",
          montserrat.className
        )}
      >
        {title}
      </h3>
      <div className="h-[180px] md:h-[188px] bg-white flex flex-col items-center justify-center pt-6">
        <UniversityItemCarousel categories={categories} />
      </div>
      {/* <div className=" line-clamp-3 list-disc list-inside text-[#594636] text-xs md:text-sm">
        {categories.map((category) => (
          <li key={category.id} className="truncate">{category.title}</li>
        ))}
      </div> */}
      <Link
        className="my-4 md:my-6 text-xs md:text-sm text-[#A98D69] font-medium underline"
        href={`/${params.lang}/educational/university/${id}`}
      >
        Read more ...
      </Link>
    </div>
  );
};

