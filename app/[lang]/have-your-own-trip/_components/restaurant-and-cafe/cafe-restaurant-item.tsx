import { RiMapPin2Fill , RiLeafLine , RiHotelLine } from "react-icons/ri";
import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import acc1 from "@/public/img/haveyorowntrip/c1.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface CafeRestaurantItemProps {
  title: string;
  city: string;
  items: string[];
}

export const CafeRestaurantItem = ({
  title,
  city,
  items,
}: CafeRestaurantItemProps) => {
  return (
    <div className="flex w-full h-full md:max-h-[332px] flex-col md:flex-row p-2 md:p-6 gap-2 md:gap-4 aspect-[1/2.5] md:aspect-video bg-white">
      <div className=" flex flex-wrap md:flex-nowrap w-full md:w-[45%] min-h-[132px]">
        <div className="aspect-[1/1.2] relative w-full">
          <Image fill className="  object-cover" src={acc1} alt="ssss" />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-2 md:w-[55%] space-y-2">
        <h2
          className={cn(
            "lg:text-2xl font-semibold text-[#594636] capitalize",
            Messina_Serif.className
          )}
        >
          {title}
        </h2>
        <p className="space-x-1 mt-2 flex items-center gap-1">
          <RiMapPin2Fill className="w-4 h-4 text-[#594636]" />
          {city}
          <span className="hidden lg:block text-[#A07E62] text-[10px] font-medium leading-[200%] underline ">
            View on the map
          </span>
        </p>
        <div className="grid grid-rows-2 grid-cols-2 gap-2 mb-2 md:mb-3">
          {items.map((item) => (
            <div
              className="bg-[#F6F6F6] p-1 md:py-[6px] md:px-2 text-center text-[8px] md:text-[10px] font-bold "
              key={item}
            >
              {" "}
              {item}{" "}
            </div>
          ))}
        </div>

        <div className="mt-4 lg:mt-6 flex items-center space-x-2">
          <span className=" text-[#259F82] text-[10px] md:text-lg font-semibold">
            Free Reservation
          </span>
        </div>
        <Separator />
        <button className=" bg-inherit hover:text-[#F07148] rounded-none text-[#594636] text-xs md:text-sm leading-normal font-semibold text-center w-full capitalize opacity-80">
          see details
        </button>
      </div>
    </div>
  );
};
