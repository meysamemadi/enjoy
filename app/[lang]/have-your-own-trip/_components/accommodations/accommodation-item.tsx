import { RiMapPin2Fill , RiLeafLine , RiHotelLine } from "react-icons/ri";
import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import acc1 from "@/public/img/haveyorowntrip/acc1.jpg";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface AccommodationItemProps {
  title: string;
  city: string;
  area: string;
  type_of_accommodation: string;
  rooms: string;
  person: string;
  price: string;
}

export const AccommodationItem = ({
  title,
  city,
  area,
  type_of_accommodation,
  rooms,
  person,
  price,
}: AccommodationItemProps) => {
  return (
    <div className="flex w-full h-full md:max-h-[332px] flex-col md:flex-row p-2 md:p-6 gap-2 md:gap-4 aspect-[1/2.5] md:aspect-video bg-white">
      <div className="grid grid-rows-2 gap-1 w-full md:w-1/2 min-h-[132px]">
        <div className=" relative">
          <Image
            fill
            className=" w-full h-full object-center object-cover"
            src={acc1}
            alt="ssss"
          />
        </div>
        <div className="flex flex-row gap-1">
          <div className="w-1/2 md:w-[60%] relative">
            <Image
              fill
              className=" w-full h-full object-center object-cover"
              src={acc1}
              alt="ssss"
            />
          </div>
          <div className="w-1/2 md:w-[40%] relative">
            <Image
              fill
              className=" w-full h-full object-center object-cover"
              src={acc1}
              alt="ssss"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 md:w-1/2 space-y-2">
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
        <div className="flex flex-col gap-2 md:gap-[10px]  lg:gap-[40px] md:flex-row mb-2 md:mb-3">
          <div className="flex flex-col ">
            <span className="text-[10px] font-semibold capitalize text-[#A07E62] leading-[150%]">
              Area
            </span>
            <span className="flex items-center gap-1 text-[12px] font-semibold text-[#33281F]">
              <RiLeafLine className="w-4 h-4 text-[#A07E62]" />
              wild
            </span>
          </div>

          <div className="flex flex-col ">
            <span className="text-[10px] font-semibold capitalize text-[#A07E62] leading-[150%]">
              Type of accommodation
            </span>
            <span className="flex items-center gap-1 text-[12px] font-semibold text-[#33281F]">
              <RiHotelLine className="w-4 h-4 text-[#A07E62]" />
              Urban
            </span>
          </div>
        </div>
        <div className=" space-x-2">
          <span className="p-1 bg-[#F6F6F6] text-[8px] font-bold text-[#594636]">
            {rooms}
          </span>
          <span className="p-1 bg-[#F6F6F6] text-[8px] font-bold text-[#594636]">
            {person}
          </span>
        </div>
        <div className="mt-4 lg:mt-6 flex items-center space-x-2">
          <span className=" text-[#259F82] text-lg font-semibold">
            {price}{" "}
          </span>
          <span className="text-[#594636] text-[10px] font-bold leading-[200%] capitalize">
            Price per night
          </span>
        </div>
        <Separator />
        <button className=" bg-inherit hover:text-[#F07148] rounded-none text-[#594636] text-sm leading-normal font-semibold text-center w-full capitalize opacity-80">
          see details
        </button>
      </div>
    </div>
  );
};
