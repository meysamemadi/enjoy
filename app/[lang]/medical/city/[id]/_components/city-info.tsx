import { brand } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import DescriptionCollapse from "./description-collapse";
import Image from "next/image";
import citymap from "@/public/img/map-city.png"
import { City } from "@/types";

const CityInfo = ({ city}: {city: City}) => {

    return (
      <div className="container mb-10 grid grid-cols-1 md:grid-cols-2 mt-[32px] md:mt-[50px] lg:mt-[80px]">
        <div className="grid-col-1 order-2 md:order-1">
          <h2
            className={cn(
              brand.className,
              "font-normal text-[#43B8A2] text-[40px] md:text-[70px] lg:text-[119px]"
            )}
          >
            {city.name}
          </h2>
          <DescriptionCollapse
            text={city.description}
          />
        </div>
        <div className="  order-1 md:order-2 relative p-2">
          <Image
           fill
            className=" object-contain w-full  md:absolute md:inset-0 md:-left-[180px] md:-top-[50px] "
            
            src={city.image_one}
            alt={city.name}
          />
        </div>
      </div>
    );
}
 
export default CityInfo;