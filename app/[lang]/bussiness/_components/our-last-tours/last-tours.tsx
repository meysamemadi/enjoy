"use client"
import React from 'react';
import Title from "@/app/[lang]/components/title";
import {Category} from "@/app/[lang]/bussiness/_components/our-last-tours/category";


interface CategoryProps {
    id:number;
    name: string;
}
export const LastTours = ({
    categories,
    tours,
                          }:{
    categories:CategoryProps[];
    tours:string[];
}) => {

    const [activeCategory, setActiveCategory] = React.useState<number>(0);
    return (
        <div className={"relative z-50"}>
            <Title title="Our last Tours" />
            <Category categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />


        </div>
    );
};

