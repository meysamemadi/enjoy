import Title from "@/app/[lang]/components/title"
import { Filters } from "./filters";
import { AccommodationList } from "./accommodation-list";

export const Accommodations = () => {
  return (
    <div className="mt-[41px] mb-[45px] md:mb-[80px]">
      <Title title="Accommodations" />
      <Filters />
      <AccommodationList />
    </div>
  );
}
