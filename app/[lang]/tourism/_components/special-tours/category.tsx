import { CategoryItem } from "./categoryItem"

interface CategoryItem {
    id: number;
    title: string;
}

interface CategoryProps {
    categories: CategoryItem[];
    setActiveCategory: (categoryId: number) => void;
    activeCategory: number;
}

export const Category = ({categories , setActiveCategory , activeCategory}: CategoryProps) => {
  return (
    <div className=" container flex flex-wrap gap-2 md:gap-4 lg:gap-6 my-4 md:mt-8 lg:mt-[40px] md:mb-6  ">

        {categories.map(category => (
            <CategoryItem key={category.id} {...category} activeCategory={activeCategory} setActiveCategory={setActiveCategory} active={activeCategory === category.id} />
        ))}

    </div>
  );
}
