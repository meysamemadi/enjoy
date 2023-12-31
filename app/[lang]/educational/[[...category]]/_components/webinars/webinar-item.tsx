"use client";
import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { useParams, useRouter } from "next/navigation";

interface WebinarProps {
  id: number;
  title: string;
  subject: string;
  lang: string;
  image?: string;
  time: string;
}

export const WebinarItem = ({
  id,
  title,
  subject,
  lang,
  image,
  time,
}: WebinarProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div
      onClick={() => router.push(`/${params.lang}/educational/webinar/${id}`)}
      className=" group  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full  cursor-pointer "
    >
      <div className="w-full h-full aspect-square overflow-hidden  md:aspect-[1.5/1] relative">
        {image && (
          <Image
            className=" transition-all group-hover:scale-150 aspect-square  md:aspect-[1.5/1] object-cover object-center w-full h-full"
            fill
            src={image}
            alt={title}
          />
        )}
      </div>
      <div className="flex flex-col">
        <h3
          className={cn(
            Messina_Serif.className,
            "text-[#594636] text-lg md:text-2xl font-semibold"
          )}
        >
          {title}
        </h3>
        <p className="mt-2 text-xs font-semibold text-[#A07E62]">{subject}</p>
        <div className="flex flex-col md:flex-row md:justify-between  md:mt-auto text-[#A07E62] text-xs font-semibold ">
          <span>{lang}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};
