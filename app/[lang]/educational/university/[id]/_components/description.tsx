import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import uni from "@/public/img/u1.png"
import { University } from "@/types";

interface DescriptionProps {
  description: string | TrustedHTML;
  univercity : University
}

const Description = ({univercity , description }: DescriptionProps) => {
  return (
    <div className=" container my-6 md:my-8">
      <div className=" relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
        <span
          className={cn(
            "text-lg md:text-[32px] font-semibold text-[#A07E62]",
            Messina_Serif.className
          )}
        >
          Educational tours
        </span>
      </div>
      <div className=" flex flex-wrap md:flex-nowrap mt-4 md:mt-[40px]  gap-[24px]">
        <div className="flex items-center flex-col order-2 md:order-1 w-full md:w-[50%] p-6">
          <div
            dangerouslySetInnerHTML={{ __html: `${description}` }}
            className="text-[#594636] text-justify  font-medium text-sm leading-[28px]"
          ></div>
        </div>
        <div className="order-1 md:order-2 bg-blue-500 w-full md:w-[50%]">
          <Image
            className="w-full h-full object-cover"
            src={univercity.main_pic}
            alt="educational tour"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
 
export default Description;