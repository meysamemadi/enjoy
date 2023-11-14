import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import BreadCrumb from "../components/breadcrumb";
import Header from "./components/Header";
import Title from "../components/title";
import SpecialServices from "./components/special-services";
import FreeConsultation from "./components/FreeConsultation";
import MedicalState from "./components/medical-state";
import CitiesHealthService from "./components/cities_health_service";
import Facilites from "./components/facilities";
import Naturopathy from "./components/naturopathy";
import DoctorsSuccess from "./components/doctors-success";

const MedicalRoot = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dic = await getDictionary(lang);
  const pages = [{ name: "Health Tour", href: "", current: true }];

  return (
    <div className="flex-1">
      <BreadCrumb pages={pages} />
      <Header dictionary={dic["medical"]} />
      <div className="mt-4">
        <Title title={dic["medical"]["Special_Services"]} />
      </div>
      <SpecialServices />
      <FreeConsultation dictionary={dic["medical"]} />
      <MedicalState dictionary={dic["medical"]} />
      <div className="mt-[40px]">
        <Title title={dic["medical"]["Cities_health_services"]} />
        <CitiesHealthService />
      </div>
      <div className="mt-[40px]">
        <Title title={dic["medical"]["Facilities_with_treatment"]} />
        <Facilites />
      </div>
      <div className="mt-[40px]">
        <Title title={dic["medical"]["naturopathy"]} />
        <Naturopathy dictionary={dic["medical"]} />
      </div>
      <div className="mt-[40px]">
        <Title title={dic["medical"]["Our_doctors_success"]} />
        <DoctorsSuccess />
      </div>
    </div>
  );
};

export default MedicalRoot;
