import { MotionDiv } from "@/app/[lang]/components/motion";
import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import { UniversitySuccess } from "@/types";
import Image from "next/image";

export const SuccessItem = ({ id, title, time, main_pic }: UniversitySuccess) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-6 border-b-0  md:border-b md:last:border-b-0 border-b-[#A07E624D] pb-0 md:pb-4 ">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className=" aspect-video  relative "
      >
        <Image
          fill
          className="aspect-video object-cover"
          src={main_pic}
          alt={title}
        />
      </MotionDiv>
      <div className=" w-full self-center">
        <h3
          className={cn(
            Messina_Serif,
            " text-base md:text-2xl text-[#594636] font-semibold"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            Messina_Serif,
            " text-[8px] md:text-xs font-semibold text-[#A07E62]"
          )}
        >
          {time}
        </p>
      </div>
    </div>
  );
};
