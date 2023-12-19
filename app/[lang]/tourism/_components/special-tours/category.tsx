import { CategoryItem } from "./categoryItem"

export const Category = () => {
  return (
    <div className=" container flex flex-wrap gap-2 md:gap-4 lg:gap-6 my-4 md:mt-8 lg:mt-[40px] md:mb-6  ">
      <CategoryItem id={1} name="toor aghvam gardi" />
      <CategoryItem id={2} name="toor ashayer" />
      <CategoryItem id={3} name="classic" />
      <CategoryItem id={4} name="jungle" active />
      <CategoryItem id={5} name="festiwal" />
      <CategoryItem id={6} name=" lady and woman" />
    </div>
  );
}
