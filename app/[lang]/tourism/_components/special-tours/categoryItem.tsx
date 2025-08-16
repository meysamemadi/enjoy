import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface CategoryItem {
    id: number;
    title: string;
    active?: boolean;
    setActiveCategory: (category: number) => void;
    activeCategory: number;
}

export const CategoryItem = ({id, title, active, activeCategory, setActiveCategory}: CategoryItem) => {

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
                " bg-white text-sm text-[#33281F] font-semibold capitalize rounded-none hover:bg-[#C0363533] hover:text-[#33281F]  ",
                active && "bg-[#C13939] text-white hover:bg-[#C13939]/80 hover:text-white/90 "
            )}
        >
            {title}
        </Button>
    );
}
