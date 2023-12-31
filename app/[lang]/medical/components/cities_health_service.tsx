import { getCities } from "@/actions/medical";
import CityItem from "./cityItem";

interface CitiesHealthServiceProps {
  lang: string;
}


const CitiesHealthService = async ({lang}: CitiesHealthServiceProps) => {
  const cities = await getCities(lang);

  return (
    <div className="bg-white mt-4 md:mt-0">
      <div className=" container py-6 md:py-8 lg:py-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 md:gap-x-[10px] gap-y-6 md:gap-y-4">
        {cities.map((city: any) => (
          <CityItem key={city.id} id={city.id} name={city.name} image={city.image_one} />
        ))}
      </div>
    </div>
  );
};
 
export default CitiesHealthService;