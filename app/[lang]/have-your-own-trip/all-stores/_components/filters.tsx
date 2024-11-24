import { Locale } from "@/i18n-config"
import { Categories } from "./categories"
import { Cities } from "./cities"
import { getAccommodationsCategory, getAccommodationsCity, getStoreCategories } from "@/actions/have-your-own-trip";

export const Filters = async ({ lang }: { lang:Locale}) => {


  const cities = await getAccommodationsCity(lang);
  const categories = await getStoreCategories(lang)


  return (
    <div className="my-6 md:mt-[30px] lg:mt-[40px] flex flex-col gap-6">
        <Cities cities={cities} lang={lang} />
        <Categories categories={categories} lang={lang} />
    </div>
  )
}
