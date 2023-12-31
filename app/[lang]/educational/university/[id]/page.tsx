import { cn } from "@/lib/utils";
import Header from "./_components/header";
import Picutre from "./_components/pictures";
import Description from "./_components/description";
import { Button } from "@/components/ui/button";
import SecondDescription from "./_components/second-description";
import { getUniversity } from "@/actions/educational";
import { University } from "@/types";
import Link from "next/link";
import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import { Messina_Serif } from "@/app/[lang]/font";

const SingleUniversity =async ({
  params,
}: {
  params: {
    id: number;
    lang: string
  };
}) => {


  const university:University = await getUniversity(params.lang,params.id)

  const pages = [{ name: "Educational", href: "#", current: true }];

  return (
    <div className="flex-1 bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Header
        bg_image={university && university.bg_pic}
        title={university && university.title}
        boards={university && university.service}
      />

      <Picutre gallery={university && university.gallery} />

      <Description
        univercity={university}
        description={university && university.description}
      />

      <div className="text-center flex flex-col items-center container my-6 md:my-8">
        <h3
          className={cn(
            Messina_Serif.className,
            " text-[32px] md:text-[46px] font-semibold text-[#594636]"
          )}
        >
          Do you want to go on this Univercity?
        </h3>
        <p className="text-[#594636] font-medium text-sm">
          If you want to go on this Univercity, contact us.
        </p>
        <Link
          className={cn(
            Messina_Serif.className,
            "bg-[#497D59] w-fit mt-6 text-[22px] font-bold rounded-none py-4 px-[48px] text-[#FAF7F5]"
          )}
          href={`/${params.lang}/educational/university/${params.id}/contact`}
        >
          Get It Touch
        </Link>
      </div>

      <SecondDescription meta={university && university.meta} />
    </div>
  );
};

export default SingleUniversity;
