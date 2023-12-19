import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryItem {
    id: number;
    name: string;
    active? : boolean
}

export const CategoryItem = ({id,name,active}:CategoryItem) => {
  return (
    <Button
      className={cn(
        " bg-white text-sm text-[#33281F] font-semibold capitalize rounded-none hover:bg-[#C0363533] hover:text-[#33281F]  ",
        active && "bg-[#C13939] text-white hover:bg-[#C13939]/80 hover:text-white/90 "
      )}
    >
      {name}
    </Button>
  );
}
