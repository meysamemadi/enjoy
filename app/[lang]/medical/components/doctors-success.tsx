import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import Image from "next/image";
import IranSuccess from "@/public/img/medical_success.png";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const DoctorsSuccess = () => {
  return (
    <div className=" container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className=" relative">
          <Image
            className="w-full h-full object-cover"
            alt="iran success"
            src={IranSuccess}
          />
          <div className="py-3 md:py-6 px-3 md:px-8 bg-[#06060699] w-full absolute bottom-0">
            <h3
              className={cn(
                "text-2xl font-semibold text-white",
                Messina_Serif.className
              )}
            >
              Want to see somewhere?
            </h3>
            <p
              className={cn(
                Messina_Serif.className,
                "text-white font-semibold text-xs"
              )}
            >
              06 Jan 2021
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <div className="flex gap-2 md:gap-6 border-b-0  md:border-b border-b-[#A07E624D] pb-0 md:pb-4 ">
            <div className=" w-[164px] ">
              <Image
                className="w-full h-full object-cover"
                src={IranSuccess}
                alt="iranSuccess"
              />
            </div>
            <div className=" w-full self-center">
              <h3
                className={cn(
                  Messina_Serif,
                  " text-base md:text-2xl text-[#594636] font-semibold"
                )}
              >
                Want to see somewhere?
              </h3>
              <p
                className={cn(
                  Messina_Serif,
                  " text-[8px] md:text-xs font-semibold text-[#A07E62]"
                )}
              >
                06 Jan 2021
              </p>
            </div>
          </div>

          <div className="flex gap-2 md:gap-6 border-b-0  md:border-b border-b-[#A07E624D] pb-0 md:pb-4 ">
            <div className=" w-[164px] ">
              <Image
                className="w-full h-full object-cover"
                src={IranSuccess}
                alt="iranSuccess"
              />
            </div>
            <div className=" w-full self-center">
              <h3
                className={cn(
                  Messina_Serif,
                  " text-base md:text-2xl text-[#594636] font-semibold"
                )}
              >
                Want to see somewhere?
              </h3>
              <p
                className={cn(
                  Messina_Serif,
                  " text-[8px] md:text-xs font-semibold text-[#A07E62]"
                )}
              >
                06 Jan 2021
              </p>
            </div>
          </div>

          <div className="flex gap-2 md:gap-6">
            <div className=" w-[164px] ">
              <Image
                className="w-full h-full object-cover"
                src={IranSuccess}
                alt="iranSuccess"
              />
            </div>
            <div className=" w-full self-center">
              <h3
                className={cn(
                  Messina_Serif,
                  " text-base md:text-2xl text-[#594636] font-semibold"
                )}
              >
                Want to see somewhere?
              </h3>
              <p
                className={cn(
                  Messina_Serif,
                  " text-[8px] md:text-xs font-semibold text-[#A07E62]"
                )}
              >
                06 Jan 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center py-8">
        <Button
          variant={"outline"}
          className=" rounded-none bg-inherit text-[#594636] text-sm font-medium"
        >
          Know more
        </Button>
      </div>
    </div>
  );
};

export default DoctorsSuccess;
