import { getDictionary } from "@/get-dictionary";
import { Header } from "./_components/Header";
import { Locale } from "@/i18n-config";
import BreadCrumb from "../components/breadcrumb";
import { WebsiteCategory } from "./_components/website-category";
import { TouristSay } from "./_components/tourists-say/tourist-say";
import { Messina_Serif } from "../font";
import style from "@/app/[lang]/styles/base.module.css";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { KnowIranBetter } from "./_components/know-iran-better/know-iran-better";
import { OurServices } from "./_components/our-service/our-services";
import { LastBlogPosts } from "./_components/last-blog/last-blog-posts";
import { IranProvince } from "./_components/iran-province/iran-province";
import { OurColleagues } from "./_components/our-colleagues/our-colleagues";
import { Comment } from "../components/comment/comment";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {

  const pages = [{ name: "Sec Page", href: "", current: true }];
  const dic = await getDictionary(lang);

  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Header dictionary={dic["base"]} />
      <WebsiteCategory />
      <TouristSay />
      <div className="container my-[48px] lg:my-[80px]">
        <div
          className={cn(
            "  aspect-[1/1.4] md:aspect-video  md:max-h-[400px] w-full h-full",
            style.one_day_tour_header
          )}
        >
          <div className=" w-full h-full  z-40 absolute flex flex-col gap-4 md:gap-6 justify-end inset-0 p-6 md:py-[62px] md:px-[70px] ">
            <h2
              className={cn(
                "text-white capitalize text-[24px] md:text-[32px] md:max-w-[533px] font-semibold md:font-bold leading-[150%]",
                Messina_Serif.className
              )}
            >
              before traveling to Iran; Get your visa and travel ticket with
              Enjoy Persia
            </h2>

            <Link
              className={cn(
                "py-3 px-[24px] md:px-[48px] md:py-4 bg-white  text-sm md:text-[22px] font-bold leading-[85.2%] text-[#594636] w-fit",
                Messina_Serif.className
              )}
              href={`/${lang}/visa`}
            >
              Registration form
            </Link>
          </div>
        </div>
      </div>
      <KnowIranBetter />
      <OurServices />
      <LastBlogPosts />
      <IranProvince />
      <OurColleagues />
      <Comment />
    </div>
  );
}
