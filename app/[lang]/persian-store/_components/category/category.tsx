"use client"
import React, { useState } from 'react'
import { CategoryItem } from './category-item'
import { SubCategory } from './sub-category'
import { getParentsCategories } from '@/actions/persian-store';
import { Locale } from '@/i18n-config';

interface Category {
    id: number;
    title: string;
    image: string;
    children: {
        id: number;
        title: string;
    }[]
}

export const Category =  ({ lang , categories }: { lang: Locale , categories:Category[] }) => {

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const handleCategorySelect = (id: number) => {
        setSelectedCategory(id);
    };

    const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);


    return (
        <div className='z-10 '>
            <div className=' mb-4 lg:mb-6 mt-[48px] md:mt-[68px] lg:mt-[84px]  mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6'>

                {categories.map((category: Category) => (
                    <CategoryItem key={category.id}  
                    {...category} 
                    onSelect={handleCategorySelect}
                    />
                ))}

            </div>

            {selectedCategory && selectedCategoryData && (
                <SubCategory subcategories={selectedCategoryData.children || []} />
            )}
        </div>

    )
}
