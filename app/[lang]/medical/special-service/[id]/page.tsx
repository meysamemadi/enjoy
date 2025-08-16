import { getService } from "@/actions/medical";
import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import { Messina_Serif } from "@/app/[lang]/font";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { specialService } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

const SpecialServicePage = async ({
  params,
}: {
  params: { lang: Locale; id: number };
}) => {
  const specialService : specialService | false = await getService(params.lang, params.id);

  if (!specialService) {
    notFound();
  }




  const pages = [
    { name: "medical", href: `/${params.lang}/medical`, current: false },
    { name: specialService.title, href: `#`, current: true },
  ];

  return (
    <div className="flex-1 bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <div className="mb-[250px] md:mb-auto  container md:max-h-[496px] relative aspect-video after:absolute after:inset-0 after:w-full after:h-full  after:bg-[linear-gradient(0deg,_#FAF5EF_16.15%,_rgba(250,_245,_239,_0.00)_100%)]">
        <Image
          className="object-cover object-center h-full w-full z-0"
          fill
          alt={specialService.title}
          src={specialService.image_bg}
        />
        <div className=" max-w-[900px] z-10 inset-x-0 mx-auto absolute top-1/2 w-full">
          <h2
            className={cn(
              "text-center mb-4 text-[24px] text-[#594636] font-bold md:hidden",
              Messina_Serif.className
            )}
          >
            {specialService.title}
          </h2>
          <p className=" text-center text-sm leading-[200%] font-medium text-[#594636]">
            {specialService.short_description}
          </p>
        </div>
      </div>
      <div className=" container flex flex-col md:flex-row gap-6 mb-[48px] md:mb-[60px]">
        <div className="w-full md:w-[40%] order-2 md:order-1">
          <h2
            className={cn(
              "text-[24px] md:text-[46px] font-semibold text-[#594636]",
              Messina_Serif.className
            )}
          >
            {specialService.subtitle_one}
          </h2>
          <p className="text-sm font-medium leading-[190%]">
            {specialService.description_one}
          </p>
        </div>
        <div className="w-full aspect-[1.5/1] relative md:w-[60%] order-1 md:order-2 ">
          <Image fill src={specialService.image_one} alt="" />
        </div>
      </div>

      <div className=" container flex flex-col md:flex-row gap-6">
        <div className="w-full aspect-[1.5/1] relative md:w-[40%] ">
          <Image className="object-cover " fill src={specialService.image_two} alt="" />
        </div>

        <div className="w-full md:w-[60%] ">
          <h2
            className={cn(
              "text-[24px] md:text-[46px] font-semibold text-[#594636]",
              Messina_Serif.className
            )}
          >
            {specialService.subtitle_two}
          </h2>
          <p className="text-sm font-medium leading-[190%]">
            {specialService.description_two}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialServicePage;
