"use client"
import { CityItem } from "./city-item";
import { Locale } from "@/i18n-config";
import { useState } from "react";

export const Cities = ({ lang , cities}: { lang: Locale , cities: any}) => {



  const [selectedValue, setSelectedValue] = useState<number | null>(null); // Manage selected value state here

  return (
    <div className=" container flex flex-wrap md:justify-between gap-2 md:gap-4 lg:gap-6">
      {cities.map((city: any) => <CityItem 
      key={city.id} 
      id={city.id} 
      name={city.name} 
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue} />)}
    </div>
  );
}
