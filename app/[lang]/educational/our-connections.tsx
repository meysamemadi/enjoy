import { cn } from "@/lib/utils";
import AzadUni from "@/public/img/azad_uni.png"
import techImg from "@/public/img/tech-ministry.svg"

import Image from "next/image"
import { Messina_Serif } from "../font";
import {getConnection} from "@/actions/connection";
import {Locale} from "@/i18n-config";
import Link from "next/link";

interface  ConnectionProps {
  id: number;
  title: string;
  image:string;
  link: string;
}

export const OurConnections = async ({ lang,type}:{lang:Locale,type:string}) => {


  const getAllConnections = await getConnection(lang,type)


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

        {getAllConnections.map((connection:ConnectionProps) => (
            <Link target={"_blank"} href={connection.link} key={connection.id} className="flex py-2 md:py-4 bg-white justify-center items-center">
              <div className=" w-16 h-16">
                <Image width={76} height={76}  className=" w-full h-full  " src={connection.image} alt="ssss" />
              </div>
              <h3 className=" text-xs font-bold text-[#594636] hover:text-[#A07E62] transition">
                {connection.title}
              </h3>
            </Link>
        ))}

      </div>
    </div>
  );
};

