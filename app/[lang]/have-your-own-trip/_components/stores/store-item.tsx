import { cn } from "@/lib/utils";
import { StoreItemCarousel } from "./store-item-carousel";
import { Messina_Serif } from "@/app/[lang]/font";
import { RiMapPin2Fill } from "react-icons/ri";

interface StoreItemProps {
  id: number,
  title: string;
  images: string[]
}
export const StoreItem = ({id, title , images}:StoreItemProps) => {
  return (
    <div className=" bg-white aspect-[1/1.29] md:aspect-[1.32] p-3 md:p-6 flex flex-col">
      <StoreItemCarousel id={id} images={images} />
      <div>
        <h2
          className={cn(
            "text-[24px] my-2 md:my-4 font-semibold text-[#594636] capitalize leading-[normal]",
            Messina_Serif.className
          )}
        >
          {title}
        </h2>
        <p className="flex gap-1 items-center capitalize justify-start">
          <RiMapPin2Fill className="w-4 h-4 text-[#594636]" />
          tehran, tehran
          <span className=" cursor-pointer ml-2 text-[9px] md:text-[10px] text-[#A07E62] underline underline-offset-4">
            View on the map
          </span>
        </p>
      </div>
    </div>
  );
};
