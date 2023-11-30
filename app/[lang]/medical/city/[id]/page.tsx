import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import { Locale } from "@/i18n-config";
import CityCarousel from "./_components/city-carousel";
import CityInfo from "./_components/city-info";
import ContactCity from "./_components/contact-city";
import Specialist from "./_components/specialist";
import MedicalServices from "./_components/medical-services";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "@/app/[lang]/font";
import { RiArrowDownLine } from "react-icons/ri";
import TouristAttractions from "./_components/tourist-attractions";

const CityPage = ({ params: { lang , id } }: { params: { lang: Locale , id: string } }) => {

    const pages = [{ name: "Health Tour", href: "", current: true }];

  return (
    <div className="flex-1">
      <BreadCrumb pages={pages} />
      <CityCarousel />
      <CityInfo />
      <ContactCity />
      <Specialist />
      <MedicalServices />
      <div className="my-[26px] md:my-[62px]">
        <p
          className={cn(
            Messina_Serif.className,
            "container font-semibold text-2xl md:text-[34px] text-center text-[#A07E62]"
          )}
        >
          In addition to treatment, you can also use our tourism and
          accommodations services
        </p>
        <div className="hidden md:flex items-center justify-center mt-[36px] ">
          <RiArrowDownLine  className="w-[32px] h-[32px] text-[#B1947D] animate-bounce" />
        </div>
      </div>
      <TouristAttractions />

    </div>
  );
};
 
export default CityPage;