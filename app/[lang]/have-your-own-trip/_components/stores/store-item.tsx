"use client"
import { cn } from "@/lib/utils";
import { StoreItemCarousel } from "./store-item-carousel";
import { Messina_Serif } from "@/app/[lang]/font";
import { RiMapPin2Fill } from "react-icons/ri";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import NextJsImage from "@/app/[lang]/components/next-js-image";

interface StoreItemProps {
  id: number,
  title: string;
  city: string;
  images: string[]
}



export const StoreItem = ({id, title , city, images}:StoreItemProps) => {

  const [open, setOpen] = useState<boolean>(false)


  return (
    <div className=" bg-white aspect-[1/1.29] md:aspect-[1.32] p-3 md:p-6 flex flex-col">
      <StoreItemCarousel id={id} images={images} />
      <div>
        <h2
          className={cn(
            "text-[24px] my-2 md:my-4 font-semibold text-[#594636] capitalize leading-[normal]",
            Messina_Serif.className
          )}
          onClick={()=> setOpen(true)}
        >
          {title}
        </h2>
        <p className="flex gap-1 items-center capitalize justify-start">
          <RiMapPin2Fill className="w-4 h-4 text-[#594636]" />
          {city}
          <span className=" cursor-pointer ml-2 text-[9px] md:text-[10px] text-[#A07E62] underline underline-offset-4">
            View on the map
          </span>
        </p>
      </div>

      <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.map((image) => ({
                    src: image, // Use the large or medium version for lightbox
                  }))}
                //@ts-ignore
                render={{ slide: NextJsImage, thumbnail: NextJsImage }}
                plugins={[Thumbnails]}
            />
    </div>
  );
};
