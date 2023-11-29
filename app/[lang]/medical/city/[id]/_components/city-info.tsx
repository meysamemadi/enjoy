import { brand } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import DescriptionCollapse from "./description-collapse";
import Image from "next/image";
import citymap from "@/public/img/map-city.png"

const CityInfo = () => {
    return (
      <div className="container mb-10 grid grid-cols-1 md:grid-cols-2 mt-[32px] md:mt-[50px] lg:mt-[80px]">
        <div className="grid-col-1 order-2 md:order-1">
          <h2
            className={cn(
              brand.className,
              "font-normal text-[#43B8A2] text-[40px] md:text-[70px] lg:text-[119px]"
            )}
          >
            Tehran
          </h2>
          <DescriptionCollapse
            text="Tehran, the largest city in Iran, has been the capital of the country for more than 200 years. In addition to the most advanced hospitals and medical services in the Middle East, it also has a variety of recreational and welfare facilities.  
It is also rich in historical monuments such as magnificent royal palaces, mosques, museums, churches and neighborhoods that narrate the "
          />
        </div>
        <div className=" order-1 md:order-2 relative p-2">
          <Image
            className="object-cover w-full  md:absolute md:inset-0 md:-left-[180px] md:-top-[50px] "
            
            src={citymap}
            alt="test"
          />
        </div>
      </div>
    );
}
 
export default CityInfo;