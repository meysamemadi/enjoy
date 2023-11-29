import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import { Locale } from "@/i18n-config";
import CityCarousel from "./_components/city-carousel";
import CityInfo from "./_components/city-info";
import ContactCity from "./_components/contact-city";
import Specialist from "./_components/specialist";

const CityPage = ({ params: { lang , id } }: { params: { lang: Locale , id: string } }) => {

    const pages = [{ name: "Health Tour", href: "", current: true }];

  return (
    <div className="flex-1">
      <BreadCrumb pages={pages} />
      <CityCarousel />
      <CityInfo />
      <ContactCity />
      <Specialist />
    </div>
  );
};
 
export default CityPage;