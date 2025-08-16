import { City as CityProps } from "@/types";
import { CityItem } from "./city-item";

export const City = ({ cities , selectedCityId , handleCitySelect }: { cities: CityProps[] , selectedCityId: number | null ,handleCitySelect: (id:number) => void}) => {
  return (
    <div className=" container flex flex-wrap md:justify-between gap-2 md:gap-4 lg:gap-6 my-4 md:mt-8 lg:mt-[40px] md:mb-6  ">

      { cities.map(city => <CityItem key={city.id} id={city.id} selectedCityId={selectedCityId} name={city.name} handleCitySelect={handleCitySelect} /> )}
      

    </div>
  );
}
