import React from 'react'
import { SubCategoryItem } from './sub-category-item'


interface SubCategoryProps {
  subcategories: {
    id: number;
    title: string;
  }[]

}

export const SubCategory = ({ subcategories }: any) => {

  return (
    <div className='flex flex-wrap gap-2 lg:gap-3  justify-center md:justify-start '>

      {subcategories.map((subcategory: any) => (
        <SubCategoryItem key={subcategory.id} {...subcategory} />
      ))}


    </div>
  )
}
