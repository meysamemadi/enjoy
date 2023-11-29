import Image from "next/image";
import Link from "next/link";
import uni from "@/public/img/uni.jpg"
import { cn } from "@/lib/utils";

interface CityItemProps {
  id: string;
  name: string;
  image?: string;
  active ?: boolean;
}

const CityItem = ({id,name,image , active}: CityItemProps) => {
    return (
      <Link href={`/medical/city/${id}`} title={name}>
        <div
          className={cn(
            "bg-white items-center  h-[175px] md:h-[230px] flex flex-col gap-3 mb-2  ",
            !active && "opacity-50",
            active && "city-container border-b-8 border-[#43B8A2]"
          )}
        >
          <div className="p-[8px] h-[128px]  md:h-[164px]">
            <Image
              width={164}
              height={164}
              className="w-full h-full bg-cover mx-auto"
              src={uni}
              alt={name}
            />
          </div>
          <div>
            <p className=" capitalize text-xs md:text-sm font-semibold text-[#594636]">
              {name}
            </p>
          </div>
        </div>
      </Link>
    );
}
 
export default CityItem;