'use client'
import Image from "next/image";
import doci from "@/public/img/doci.jpg"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams } from "next/navigation";

interface DoctorItemProps {
    avatar: string;
    id: string;
    name: string;
    category:{
      id: number;
      name: string
    }
}
const DoctorItem = ({ id, name, avatar, category }: DoctorItemProps) => {

  const params = useParams();

  return (
    <div className="bg-white text-center h-[206px] md:h-[270px] py-4 px-3 md:p-6 flex flex-col items-center justify-center">
      <div className=" relative w-[48px] md:w-[80px] h-[48px] md:h-[80px] mb-4">
        <Image
          className="w-full h-full object-cover"
          fill
          alt={name}
          src={avatar}
        />
      </div>
      <p className="text-xs md:text-sm font-bold text-[#594636] capitalize mb-3 md:mb-1">
        {name}
      </p>
      <p className="text-xs font-semibold capitalize text-[#594636] whitespace-nowrap ">
        {category.name}
      </p>
      <Separator className="bg-[#EFEDEB] my-4 md:my-2" />

      <Link href={`/${params.lang}/medical/doctor/${id}`} title={name}>
        <p className=" text-sm capitalize underline text-[#A07E62] font-bold">
          see detail
        </p>
      </Link>
    </div>
  );
};
 
export default DoctorItem;