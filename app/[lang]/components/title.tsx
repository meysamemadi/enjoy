"use client";

import { cn } from "@/lib/utils";
import { Messina_Serif } from "../font";

interface TitleProps {
  title: string;
  link?: string;
  linkeText?: string;
  className? : string
}

const Title = ({ title, link, linkeText, className }: TitleProps) => {
  return (
    <div className="container">
      <div className={cn(" py-2 border-b border-[#A07E624D]/30", className)}>
        <span
          className={cn(
            Messina_Serif.className,
            "text-lg md:text-[32px] font-semibold text-[#A07E62] capitalize "
          )}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default Title;
