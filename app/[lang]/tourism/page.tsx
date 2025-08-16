import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Locale } from "@/i18n-config";
import { Messina_Serif } from "../font";

import BreadCrumb from "../components/breadcrumb";

import { Header } from "./_components/Header";
import { getDictionary } from "@/get-dictionary";
import { NextTours } from "./_components/next-tours";
import { SpecialTours } from "./_components/special-tours";
import { OneDayTours } from "./_components/one-day-tours/one-day-tours";

// assets
import makeYourOwnImg from "@/public/img/make-your-own.png"
import makeYourOwnImg2 from "@/public/img/make-your-own2.png";
import findYourCompanion from "@/public/img/Find_your_companion.jpg";
import Title from "../components/title";
import { Button } from "@/components/ui/button";
import { OurColleagues } from "./_components/our-colleagues/our-colleagues";
import {
  getAllCategories,
  getAllCities,
  getAllOneDayTours,
  getAllSpecialTours,
  getNext2Month
} from "@/actions/tourism-tour";

const TourismTour = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const pages = [{ name: "Tourism Tour", href: "", current: true }];
  const dic = await getDictionary(lang);
  const next2monthTours = await getNext2Month(lang)
  const categories = await getAllCategories(lang);
  const specialTours = await getAllSpecialTours(lang);
  const cities = await getAllCities(lang);
  const oneDayTours = await getAllOneDayTours(lang);


  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Header dictionary={dic["tourism"]} />
      <NextTours next2monthTours={next2monthTours} />
      <SpecialTours specialTours={specialTours} categories={categories} />
      <div className=" relative my-[40px]  md:my-[60px] lg:my-[76px]  container">
        <Image
          className="hidden md:block w-full h-full md:max-h-[400px] "
          alt="make your own Tour"
          src={makeYourOwnImg}
        />

        <Image
          className="md:hidden w-full h-full"
          alt="make your own Tour"
          src={makeYourOwnImg2}
        />

        <div className=" absolute flex flex-col top-[55%] md:top-1/2 md:-translate-y-1/2 left-[12%] md:left-[6%]">
          <h3
            className={cn(
              "max-w-[265px] md:max-w-[245px] text-[40px] text-white capitalize -mt-[2%] mb-4 md:mb-2 ",
              Messina_Serif.className
            )}
          >
            Make your own tour ...
          </h3>
          <Link
            className="py-3 px-[18px] border border-white text-white text-center"
            href=""
          >
            Registration form
          </Link>
        </div>
      </div>
      <OneDayTours cities={cities} oneDayTours={oneDayTours}/>
      <div className=" container">
        <Title title="Find your companion" />
        <div className="mt-6 md:mt-[40px] bg-white flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-[60%] aspect-video max-h-[339px] ">
            <Image
              alt="find your companion"
              className="w-full h-full object-cover "
              src={findYourCompanion}
            />
          </div>
          <div className="w-full md:w-[40%] p-6 md:py-[50px] flex flex-col gap-6 md:gap-[40px]">
            <p className=" text-sm text-[#594636] font-medium leading-[200%]">
              If you intend to travel to Iran but are alone and seek
              co-travelers who match your taste and interests, it is enough to
              inform Enjoy Persia. We search among applicants of your country
              and other ones and suggest the best companions to travel together
              to Iran and have a unique experience.
            </p>
            <Button
              className="bg-[#C13939] text-[#FAF7F5] hover:bg-[#C13939]/60"
              asChild
            >
              <Link href={""}>Register the form</Link>
            </Button>
          </div>
        </div>
      </div>

      <OurColleagues />
    </div>
  );
};
 
export default TourismTour;