import { CategoryItem } from "./categoryItem"

export const Category = () => {
  return (
    <div className=" container flex flex-wrap md:justify-between gap-2 md:gap-4 lg:gap-6 my-4 md:mt-8 lg:mt-[40px] md:mb-6  ">
      <CategoryItem id={1} name="tehran" />
      <CategoryItem id={2} name="esfahan" />
      <CategoryItem id={3} name="shiraz" />
      <CategoryItem id={4} name="rasht" active />
      <CategoryItem id={5} name="mashhad" />
      <CategoryItem id={6} name="other" />
    </div>
  );
}
