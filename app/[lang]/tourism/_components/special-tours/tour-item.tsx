import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface TourItemProps {
  id: number;
  title: string;
  image: string;
  price: string;
  days?: string;
  start_at?: string;
}

const TourItem = ({
  id,
  title,
  image,
  price,
  days,
  start_at,
}: TourItemProps) => {
  return (
    <div className=" px-4 pt-4 pb-2 md:pb-6 bg-white">
      <div className="flex flex-col">
        <div className=" relative max-h-[320px] aspect-square">
          <Image
            fill
            className="  w-full h-full object-center object-cover"
            src={image}
            alt={title}
          />
        </div>
        <h2 className="text-[10px] md:text-[22px] font-bold text-[#594636] mt-2 md:mt-4">{title}</h2>
        <div className="flex my-2 md:my-4">
          <span className="text-[8px] md:text-[14px] font-medium text-[#594636] ">
            {days}
          </span>
          {start_at && (
            <span className="text-[8px] md:text-[14px] font-medium text-[#594636]">
              <span className="text-[8px] md:text-[14px] font-medium text-[#A07E62]">
                Starts in:
              </span>
              {start_at}
            </span>
          )}
        </div>
        <span className="text-[12px] md:text-[20px] font-semibold text-[#259F82]">
          {price}
        </span>
        <Separator className="my-2 md:my-6" />
        <div className="flex items-center justify-center ">
          <Link href={``} title={title}>
            <span className="text-[8px] md:text-[15px] capitalize font-semibold text-[#594636] ">
              see detail
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
