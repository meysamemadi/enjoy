import Title from "@/app/[lang]/components/title"
import { Filters } from "./filters";
import { AccommodationList } from "./accommodation-list";
import { Locale } from "@/i18n-config";
import { getAccommodations } from "@/actions/have-your-own-trip";

export const Accommodations = async({lang , searchParams}: {lang:Locale , searchParams :{[key: string]: string | string[] | undefined }}) => {


  const accommodations = await getAccommodations(lang , searchParams)


  return (
    <div className="mt-[41px] mb-[45px] md:mb-[80px]">
      <Title title="Accommodations" link={`have-your-own-trip/all-accommodations`} linkeText="see all" />
      <Filters lang={lang} />
      <AccommodationList accommodations={accommodations} />
    </div>
  );
}
