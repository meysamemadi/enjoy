import React from 'react'
import { CategoryItem } from './category-item';

export const Categories = () => {
  return (
    <div className=" container flex flex-wrap md:justify-between gap-2 md:gap-4 lg:gap-6">
      <CategoryItem id={1} name="all" active />
      <CategoryItem id={1} name="Accommodations" />
      <CategoryItem id={1} name="hotel" />
      <CategoryItem id={1} name="cafe" />
      <CategoryItem id={1} name="juice" />
      <CategoryItem id={1} name="Economics" />
    </div>
  );
}
