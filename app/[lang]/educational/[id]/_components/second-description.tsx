'use client'

import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Property from "./property";
import { Meta } from "@/types";

interface SecondDescriptionProps {
  meta : Meta[]
}

const SecondDescription = ({ meta}: SecondDescriptionProps) => {

    return (
      <div className=" container my-6 md:my-8">
        <div className=" relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
          <span
            className={cn(
              "text-lg md:text-[32px] font-semibold text-[#A07E62]",
              Messina_Serif.className
            )}
          >
            Description
          </span>
        </div>
        <div className="flex flex-col gap-2 pt-6  ">
          {meta &&
            meta.map((property) => (
              <Property
                key={property.id}
                name={property.name}
                value={property.value}
                type={property.type}
              />
            ))}
        </div>
      </div>
    );
}
 
export default SecondDescription;