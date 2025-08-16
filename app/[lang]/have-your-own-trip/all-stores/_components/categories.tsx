"use client"
import React, { useState } from 'react'
import { CategoryItem } from './category-item';
import { Locale } from '@/i18n-config';

export const Categories = ({ lang, categories }: { lang: Locale, categories: any }) => {


  const [selectedValue, setSelectedValue] = useState<number | null>(null); // Manage selected value state here


  return (
    <div className=" container flex flex-wrap md:justify-between gap-2 md:gap-4 lg:gap-6">

      {categories.map((category: any) => <CategoryItem
        key={category.id}
        id={category.id}
        name={category.name}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />)}

    </div>
  );
}
