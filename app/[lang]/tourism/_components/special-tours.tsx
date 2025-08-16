"use client"
import Title from "../../components/title";
import { Category } from "./special-tours/category";
import { Tours } from "./special-tours/tours";
import {Tour} from "@/types";
import {useState} from "react";


interface Category {
    id: number;
    title: string;
}

interface SpecialToursProps {
    categories: Category[];
    specialTours : Tour[]
}

export const SpecialTours = ({ categories , specialTours }: SpecialToursProps) => {

    const [activeCategory, setActiveCategory] = useState<number>(0)

    let filterTours
    if (activeCategory > 0) {
        filterTours = specialTours.filter((item) => item.category === activeCategory)
    }else {
        filterTours = specialTours
    }

    return ( 
        <div className=" mt-[48px] md:mt-[80px]">
            <Title title="special tours"  />
            <Category activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />

            <Tours specialTours={filterTours} />

        </div>
     );
}
 
