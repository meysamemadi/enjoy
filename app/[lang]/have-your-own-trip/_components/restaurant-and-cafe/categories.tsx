import React from 'react'
import { CategoryItem } from './category-item';

export const Categories = () => {
  return (
    <div className=" container flex flex-wrap md:justify-start gap-2 md:gap-4 lg:gap-6">
      <CategoryItem id={1} name="all" active />
      <CategoryItem id={1} name="Restaurant" />
      <CategoryItem id={1} name="Traditional" />
      <CategoryItem id={1} name="cafe" />
    </div>
  );
}
