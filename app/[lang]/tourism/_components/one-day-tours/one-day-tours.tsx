"use client"
import Title from "@/app/[lang]/components/title";
import { Category } from "./category";
import { Tours } from "./tours";
import {Tour} from "@/types";
import {useState} from "react";


interface City {
    id: number;
    name: string;
}
interface OneDayToursProps {
    cities: City[];
    oneDayTours:Tour[];
}

export const OneDayTours = ({cities , oneDayTours}:OneDayToursProps) => {


    const [activeCategory, setActiveCategory] = useState<number>(0)

    let filterTours
    if (activeCategory > 0) {
        filterTours = oneDayTours.filter((item) => item.city === activeCategory)
    }else {
        filterTours = oneDayTours
    }

  return (
    <div className="">
      <Title title="One day tours" />
       <Category activeCategory={activeCategory} setActiveCategory={setActiveCategory} cities={cities} />

      <Tours oneDayTours={filterTours} />
    </div>
  );
}
