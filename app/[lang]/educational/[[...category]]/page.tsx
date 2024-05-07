import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Header } from "./_components/header";
import {UniversitiesSection} from "./_components/universities/universities-section";
import { FreeConsultation } from "./_components/free-consultation";
import { OurServices } from "./_components/our-services";
import { TouristSay } from "./_components/tourists-say/tourist-say";
import { Webinars } from "./_components/webinars/webinars";
import EducationalTour from "./_components/educational-tour";
import WorksInIran from "./_components/works-in-iran";
import { UniversitiesSuccess } from "./_components/universities-success/universities-success";
import { OurConnections } from "../our-connections";
import { Comment } from "../../components/comment/comment";


const IndexEducational = async ({
  params,
}: {
  params: { category: string | undefined; lang: Locale };
}) => {
  const lang = params.lang;
  const category = params.category
  const pages = [{ name: "Educational", href: "#", current: false }];
  const dic = await getDictionary(lang);

  return (
    <div className="flex-1 bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Header dictionary={dic["educational"]} />
      <UniversitiesSection category={category} lang={lang} />
      <FreeConsultation />
      <OurServices />
      <TouristSay />
      <Webinars lang={lang} />
      <EducationalTour />
      <WorksInIran />
      <UniversitiesSuccess lang={lang} />
      <OurConnections />

      <Comment />
    </div>
  );
};

export default IndexEducational;