'use client'

import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Property from "./property";

const SecondDescription = () => {
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
          <Property title="number of students" description="1290" type={true} />
          <Property
            title="Gender of acceptance"
            description="Men, Women"
            type={true}
          />
          <Property
            title="Languages ​​of study"
            description="English"
            type={true}
          />
          <Property
            title="Does it have virtual training?"
            description="1290"
            type={true}
          />
          <Property
            title="Colleges"
            description="Business - Medical - Engineering - Economy"
            type={true}
          />
        </div>
      </div>
    );
}
 
export default SecondDescription;