import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryItem {
    id: number;
    name: string;
    active?: boolean;
    setActiveCategory: (category: number) => void;
    activeCategory: number;
}

export const CategoryItem = ({id, name, active, activeCategory, setActiveCategory}: CategoryItem) => {

    const onClick = (id: number) => {
        if (id === activeCategory) {
            setActiveCategory(0);
        }else {
            setActiveCategory(id);
        }
    }


  return (
    <Button
        onClick={() => onClick(id)}
      className={cn(
        " bg-white text-sm text-[#33281F] font-semibold capitalize rounded-none hover:bg-[#C0363533] hover:text-[#33281F] py-2 md:py-3 px-6 md:px-[57px]  ",
        active && "bg-[#2697AD] text-white hover:bg-[#2697AD]/80 hover:text-white/90 "
      )}
    >
      {name}
    </Button>
  );
}
