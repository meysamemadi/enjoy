import React from "react";
import Univercities from "./components/Univercities";
import { Locale } from "@/i18n-config";
import { getCategories } from "@/actions/educational";
import { Category } from "@/types";
import { getDictionary } from "@/get-dictionary";
import Header from "./components/Header";
import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import CategorySlider from "./components/CategorySlider";
import FreeConsultation from "./components/FreeConsultation";
import OurServices from "./components/OurServices";
import Webinars from "./components/Webinars";
import EducationalTour from "./components/EducationalTour";
async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  const categories: Category[] = await getCategories(lang);
  const dic = await getDictionary(lang);

  const pages = [{ name: "Educational", href: "#", current: false }];

  
  return (
    <div className=" h-full">
      <BreadCrumb pages={pages} />
      <Header />
      <Univercities dictionary={dic.educational} categories={categories} />
      <FreeConsultation />
      <OurServices />
      <Webinars />
      <EducationalTour />
   
      
    </div>
  );
}

export default IndexPage;
