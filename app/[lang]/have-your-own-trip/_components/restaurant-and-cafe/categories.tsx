"use client"
import React, { useState } from 'react'
import { CategoryItem } from './category-item';

export const Categories = () => {

  const categories = [
    { id: "All", name: "All" },
    { id: "Restaurant", name: "Restaurant" },
    { id: "Eco-Traditional", name: "Eco-Traditional" },
    { id: "Cafes", name: "Cafe" },
  ];

  const [selectedValue, setSelectedValue] = useState<string | null>(null); // Manage selected value state here


  return (
    <div className=" container flex flex-wrap md:justify-start gap-2 md:gap-4 lg:gap-6">

      {categories.map((category) => (

        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ))}

    </div>
  );
}
