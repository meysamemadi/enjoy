import { Locale } from "@/i18n-config";
import BreadCrumb from "../components/breadcrumb";
import { Header } from "./_components/Header";
import { getDictionary } from "@/get-dictionary";
import { NextTours } from "./_components/next-tours";
import { SpecialTours } from "./_components/special-tours";

const TourismTour = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const pages = [{ name: "Tourism Tour", href: "", current: true }];
  const dic = await getDictionary(lang);

  return (
    <div className="flex-1 bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Header dictionary={dic["tourism"]} />
      <NextTours />
      <SpecialTours />
    </div>
  );
};
 
export default TourismTour;