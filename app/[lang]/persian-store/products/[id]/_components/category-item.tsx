'use client'
import Image from "next/image";
import Link from "next/link";
import uni from "@/public/img/uni.jpg"
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CategoryItemProps {
  id: number;
  title: string;
  image: string;
  setChildren: (children: any) => void
  onSelect: (id: number) => void;
  selectedCategory: number | null
  child: {
    id: number;
    title: string;
  }[]
}

const CategoryItem = ({ id, title, image, child, setChildren, onSelect , selectedCategory }: CategoryItemProps) => {

  const { lang, id: CategoryID } = useParams()
  const [active, setActive] = useState(false)


  useEffect(() => {
    child.map((item) => {
      if (item.id === Number(CategoryID)) {
        setActive(true)
        setChildren(child)
      }
    })
  }, [active])




  return (
    <div
      onClick={() => onSelect(id)}
      className={cn(
        "bg-white items-center  h-[175px] md:h-[230px] flex flex-col gap-3 mb-2 ",
        active ? "store-category-container border-b-8 border-[#9F7C63]" : "opacity-50",
        selectedCategory === id && "opacity-100"
      )}
    >
      <div className="p-[8px] h-[128px]  md:h-[164px]">
        <Image
          width={164}
          height={164}
          className="w-full h-full bg-cover mx-auto"
          src={image}
          alt={title}
        />
      </div>
      <div>
        <p className=" px-1 lg:px-4 capitalize text-xs md:text-sm font-semibold text-[#594636] text-center">
          {title}
        </p>
      </div>
    </div>
  );
}

export default CategoryItem;