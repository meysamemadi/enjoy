"use client";

import { cn } from "@/lib/utils";
import { Messina_Serif } from "../font";
import { useParams, useRouter } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";

interface TitleProps {
  title: string;
  link?: string;
  linkeText?: string;
  className? : string
}

const Title = ({ title, link, linkeText, className }: TitleProps) => {

  const params = useParams();
  const router = useRouter();

  return (
    <div className="container">
      <div
        className={cn(
          " py-2 border-b border-[#A07E624D]/30 flex justify-between",
          className
        )}
      >
        <span
          className={cn(
            Messina_Serif.className,
            "text-lg md:text-[32px] font-semibold text-[#A07E62] capitalize "
          )}
        >
          {title}
        </span>
        {linkeText && (
          <span
            onClick={() => router.push(`${params.lang}/${link}`)}
            className="text-[13px] md:text-[14px] text-[#594636] font-medium leading-[normal] bg-inherit self-end capitalize flex items-center"
          >
            {linkeText}
            <RiArrowRightSLine className=" w-4 md:w-5 h-4 md:h-5" />
          </span>
        )}
      </div>
    </div>
  );
};

export default Title;
