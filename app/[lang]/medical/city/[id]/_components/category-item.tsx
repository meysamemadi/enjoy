import { cn } from "@/lib/utils";
import Link from "next/link";

interface CategoryItemProps {
  id: string;
  title: string;
  active?: boolean
}
const CategoryItem = ({ id, title , active }: CategoryItemProps) => {
  return (
    // <Link href={}>
    <div
      className={cn(
        "bg-white text-center capitalize p-1 flex items-center justify-items-center justify-center hover:bg-[#43B8A21A]/10 w-fit md:w-[164px] whitespace-nowrap md:whitespace-normal text-sm font-semibold text-[#594636]",
        active && "bg-[#43B8A2] text-white hover:bg-[#43B8A2]/80"
      )}
    >
      {title}
    </div>
    // </Link>
  );
};

export default CategoryItem;
