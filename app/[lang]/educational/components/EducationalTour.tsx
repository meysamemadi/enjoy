import { ChevronRightIcon } from "lucide-react";
import { Messina_Serif } from "../../font";
import { cn } from "@/lib/utils";

const EducationalTour = () => {
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
        <span className="text-[14px] text-[#594636] items-center font-semibold absolute right-0 -bottom-4 bg-[#FAF5EF] p-2 flex">
          See All <ChevronRightIcon size={15} />
        </span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap bg-white mt-4  gap-[24px]">
        <div className=" w-full md:w-[40%]">
          <p className="text-[#594636] font-medium text-sm leading-[28px] p-6">
            Enjoy Persia has the ability to make all intersted people,
            instructors and students of all universities of the world experience
            the most unique scientific and educational trips. Such trips include
            tours on Iranian architecture, historiology, environment, industries
            and mines, cultural studies, instruction of handicrafts in the
            Middle East and all other tours combined with science and industry
            and art. It is enough to send us a message.
          </p>
        </div>
        <div className="bg-blue-500 w-full md:w-[60%]">test</div>
      </div>
    </div>
  );
};

export default EducationalTour;
