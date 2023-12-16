import React from "react";
import Univercities from "./components/Univercities";
import { Locale } from "@/i18n-config";
import { getCategories, getFeaturedWebinar, getUniversities, getWebinars } from "@/actions/educational";
import { Category } from "@/types";
import { getDictionary } from "@/get-dictionary";
import Header from "./components/Header";
import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import CategorySlider from "./components/CategorySlider";
import FreeConsultation from "./components/FreeConsultation";
import OurServices from "./components/OurServices";
import Webinars from "./components/Webinars";
import EducationalTour from "./components/EducationalTour";
import WorksInIran from "./components/WorksInIran";
import IranUniversitiesSuccess from "./components/IranUniversitiesSuccess";
import OurConnections from "./components/OurConnections";
async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  const categories: Category[] = await getCategories(lang);

  const dic = await getDictionary(lang);

  const pages = [{ name: "Educational", href: "#", current: false }];

  const universities = await getUniversities(lang);
  const webinars = await getWebinars(lang);
  const FeaturedWebinar = await getFeaturedWebinar(lang);





  
  return (
    <div className=" flex-1">
      <BreadCrumb pages={pages} />
      <Header dictionary={dic["educational"]} />
      <Univercities
        dictionary={dic.educational}
        universities={universities}
        categories={categories}
      />
       <FreeConsultation />
      <OurServices />
      <Webinars webinars={webinars} featured={FeaturedWebinar} />
      <EducationalTour />
      <WorksInIran />
      <IranUniversitiesSuccess />
      <OurConnections /> 
    </div>
  );
}

export default IndexPage;
