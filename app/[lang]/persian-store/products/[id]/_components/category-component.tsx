"use client"
import React, { useEffect, useState } from 'react'
import CategoryCarousel from './category-carousel'
import { SubCategory } from './sub-category';

interface CategoryItemProps {
    id: number;
    title: string;
    image: string;
    children: {
        id: number;
        title: string;
    }[]
}

interface ChildrenProps {
    id: number;
    title: string;
}

export const CategoryComponent = ({ categories }: { categories: CategoryItemProps[] }) => {
    const [children, setChildren] = useState<ChildrenProps[] | undefined>([])
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);


    useEffect(()=> {

        const selectedCategoryData = categories.find((cat:any) => cat.id === selectedCategory);
        if(selectedCategory)
        {
            setChildren(selectedCategoryData?.children)
        }


    },[selectedCategory])

   


    const handleCategorySelect = (id: number) => {
        setSelectedCategory(id);
    };
  



    return (
        <>
            <CategoryCarousel categories={categories} handleCategorySelect={handleCategorySelect} setChildren={setChildren} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            <div className=' container mt-6'>
                <SubCategory subcategories={children} />
            </div>
        </>
    )
}
