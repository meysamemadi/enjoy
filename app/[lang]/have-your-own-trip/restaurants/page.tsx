import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import BreadCrumb from "../../components/breadcrumb";
import { CityIndex } from "./_components/city";
import { ResturantContainer } from "./_components/restaurant-container";
import Title from "../../components/title";
import { Banner } from "./_components/banner";

const RestaurantsPage = async({ params: { lang } , searchParams } : { params : {lang : Locale} , searchParams: { [key: string]: string | string[] | undefined }}) => {
    const pages = [{ name: "Have Your Own Trip", href: "", current: true }];
    const dic = await getDictionary(lang);
  
    return (
      <div className="flex flex-col bg-[#FAF5EF]">
        <BreadCrumb pages={pages} />
        <Banner />
        <CityIndex lang={lang} searchParams={searchParams} />
        <ResturantContainer lang={lang} searchParams={searchParams} />
      </div>
    )
}

export default RestaurantsPage