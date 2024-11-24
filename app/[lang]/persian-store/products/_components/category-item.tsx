'use client'
import Image from "next/image";
import Link from "next/link";
import uni from "@/public/img/uni.jpg"
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

interface CategoryItemProps {
  id: number;
  name: string;
  image: string;
}

const CategoryItem = ({id,name,image}: CategoryItemProps) => {

  const params = useParams()

    return (
      <Link href={``} title={name}>
        <div
          className={cn(
            "bg-white items-center  h-[175px] md:h-[230px] flex flex-col gap-3 mb-2 ",
            //@ts-ignore
            false &&
              "opacity-50 store-category-container border-b-8 border-[#9F7C63]"
          )}
        >
          <div className="p-[8px] h-[128px]  md:h-[164px]">
            <Image
              width={164}
              height={164}
              className="w-full h-full bg-cover mx-auto"
              src={image}
              alt={name}
            />
          </div>
          <div>
            <p className=" px-1 lg:px-4 capitalize text-xs md:text-sm font-semibold text-[#594636] text-center">
              {name}
            </p>
          </div>
        </div>
      </Link>
    );
}
 
export default CategoryItem;