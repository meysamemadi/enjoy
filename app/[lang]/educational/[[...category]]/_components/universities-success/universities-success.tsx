import { getUniversitySuccessLimited } from "@/actions/educational";
import { MotionDiv } from "@/app/[lang]/components/motion";
import Title from "@/app/[lang]/components/title";
import { Messina_Serif } from "@/app/[lang]/font";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { UniversitySuccess } from "@/types";
import Image from "next/image";
import { SuccessItem } from "./success-item";
import Link from "next/link";

export const UniversitiesSuccess = async ({ lang }: { lang: Locale }) => {
  const success = await getUniversitySuccessLimited(lang);

  if (!success) return null;

  let newArray;

  if (success.length > 2) {
    newArray = success.slice(1);
  } else {
    newArray = false;
  }

  if (success) {
    return (
      <div>
        <Title title="iran's universities Successes" />
        <div className=" container">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-[40px]  gap-[24px]">
            <div className=" aspect-video relative">
              <Image
                fill
                className="aspect-video object-cover"
                alt="iran success"
                src={success[0].main_pic}
              />
              <div className="py-3 md:py-6 px-3 md:px-8 bg-[#06060699] w-full absolute bottom-0">
                <h3
                  className={cn(
                    "text-2xl font-semibold text-white",
                    Messina_Serif.className
                  )}
                >
                  {success[0].title}
                </h3>
                <p
                  className={cn(
                    Messina_Serif.className,
                    "text-white font-semibold text-xs"
                  )}
                >
                  {success[0].time}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {
                  newArray &&
                  /**@ts-ignore */
                  newArray.map((item: UniversitySuccess) => (
                    <SuccessItem key={item.id} {...item} />
                  ))
              }
            </div>
          </div>
          <div className=" text-center py-8">
            <Button
              variant={"outline"}
              className=" rounded-none bg-inherit text-[#594636] text-sm font-medium"
              asChild
            >
              <Link href={`/${lang}/educational/universities-success`}>Know more</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
