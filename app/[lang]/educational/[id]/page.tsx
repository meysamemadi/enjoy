import { cn } from "@/lib/utils";
import BreadCrumb from "../../components/breadcrumb";
import Header from "./_components/header";
import { Messina_Serif } from "../../font";
import Picutre from "./_components/pictures";
import Description from "./_components/description";
import { Button } from "@/components/ui/button";
import SecondDescription from "./_components/second-description";
import { getUniversity } from "@/actions/educational";

const SingleUniversity =async ({
  params,
}: {
  params: {
    id: number;
    lang: string
  };
}) => {


  const university = await getUniversity(params.lang,params.id)

  const pages = [{ name: "Educational", href: "#", current: true }];

  return (
    <div>
      <BreadCrumb pages={pages} />
      <Header
        bg_image={university && university.bg_pic}
        title={university && university.title}
        boards={[
          "The Board of Founders",
          "The Board of Trustees",
          "The President of the University",
          "The University Council",
          "The President of the University",
          "The University Council",
        ]}
      />

      <Picutre gallery={university && university.gallery} />

      <Description
        univercity={university}
        description={university && university.description}
      />

      <div className="text-center container my-6 md:my-8">
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
        <Button
          className={cn(
            Messina_Serif.className,
            "bg-[#497D59] mt-7 text-[22px] font-bold rounded-none py-4 px-[48px] text-[#FAF7F5]"
          )}
        >
          Get It Touch
        </Button>
      </div>

      <SecondDescription />
    </div>
  );
};

export default SingleUniversity;
