import { CategoryItem } from "./categoryItem"

interface City {
    id: number;
    name: string;
}

interface CategoryProps {
    cities: City[];
    setActiveCategory: (categoryId: number) => void;
    activeCategory: number;
}

export const Category =  ({cities , setActiveCategory , activeCategory}: CategoryProps) => {
  return (
    <div className=" container flex flex-wrap md:justify-between gap-2 md:gap-4 lg:gap-6 my-4 md:mt-8 lg:mt-[40px] md:mb-6  ">
        {cities.map((city:City) => (
            <CategoryItem key={city.id} {...city} activeCategory={activeCategory} setActiveCategory={setActiveCategory} active={activeCategory === city.id} />
        ))}
    </div>
  );
}
