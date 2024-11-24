import { Locale } from "@/i18n-config";
import { Categories } from "./categories"
import { Cities } from "./cities"
import { getAccommodationsCity } from "@/actions/have-your-own-trip";

export const Filters = async ({ lang }: { lang:Locale}) => {

  const cities = await getAccommodationsCity(lang);
  // const categories = await getAccommodationsCategory(lang)


  return (
    <div className="my-6 md:mt-[30px] lg:mt-[40px] flex flex-col gap-6">
      <Cities lang={lang} cities={cities} />
      <Categories />
    </div>
  );
}
