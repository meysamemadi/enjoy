import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import AzadUni from "@/public/img/azad_uni.png"
import Image from "next/image"

const OurConnections = () => {
  return (
    <div className=" container my-6 md:my-8">
      <div className=" relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
        <span
          className={cn(
            "text-lg md:text-[32px] font-semibold text-[#A07E62]",
            Messina_Serif.className
          )}
        >
          Our Connections
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-[40px]  gap-[24px]">
        <div className="flex py-2 md:py-4 bg-white justify-center items-center">
          <div className=" w-16 h-16">
            <Image className=" w-full h-full  " src={AzadUni} alt="ssss" />
          </div>
          <h3 className=" text-xs font-bold text=[#594636] hover:text-[#A07E62] transition">
            Azad University of Iran
          </h3>
        </div>

        <div className="flex py-2 md:py-4 bg-white justify-center items-center">
          <div className=" w-16 h-16">
            <Image className=" w-full h-full  " src={AzadUni} alt="ssss" />
          </div>
          <h3 className=" text-xs font-bold text=[#594636] hover:text-[#A07E62] transition">
            Azad University of Iran
          </h3>
        </div>

        <div className="flex py-2 md:py-4 bg-white justify-center items-center">
          <div className=" w-16 h-16">
            <Image className=" w-full h-full  " src={AzadUni} alt="ssss" />
          </div>
          <h3 className=" text-xs font-bold text=[#594636] hover:text-[#A07E62] transition">
            Azad University of Iran
          </h3>
        </div>

        <div className="flex py-2 md:py-4 bg-white justify-center items-center">
          <div className=" w-16 h-16">
            <Image className=" w-full h-full  " src={AzadUni} alt="ssss" />
          </div>
          <h3 className=" text-xs font-bold text=[#594636] hover:text-[#A07E62] transition">
            Azad University of Iran
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OurConnections;
