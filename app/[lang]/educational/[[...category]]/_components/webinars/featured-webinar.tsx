'use client'
import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import { Webinar } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";



export const FeaturedWebinar = ({ Featured }: { Featured: Webinar }) => {

  const params = useParams();

  if (Featured) {
    return (
      <>
        <div className="container aspect-video relative h-full w-full">
          <Image
            className="aspect-video w-full h-full object-cover object-center"
            src={Featured.main_pic}
            width={1100}
            height={736}
            alt="webinar"
          />

          <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center  text-white text-center ">
            <h2
              className={cn(
                Messina_Serif.className,
                "text-[32px] drop-shadow font-semibold mb-5  "
              )}
            >
              Our last online webinars{" "}
            </h2>
            <p
              className={cn(
                "text-[20px] text-white font-semibold",
                Messina_Serif.className
              )}
            >
              {Featured.title}
            </p>
            <Link
              className="py-4 my-3 px-[48px] bg-[#497D59] font-bold"
              href={`/${params.lang}/educational/webinar/${Featured.id}`}
            >
              Register
            </Link>
          </div>
          <div
            className={cn(
              "absolute bottom-0 left-0 text-white right-0 p-4 hidden md:flex flex-nowrap justify-between items-end ",
              Messina_Serif.className
            )}
          >
            <span className=" py-2 px-4 bg-[#33281F80]/50">
              Lang: {Featured.languages}
            </span>
            <div className="flex gap-1">
              <span className="flex flex-col p-4 bg-[#33281f80]/50 items-center">
                <span className="text-[20px] font-semibold">1</span>
                <span className=" text-xs font-semibold">Days</span>
              </span>
              <span className="flex flex-col p-4 bg-[#33281f80]/50 items-center">
                <span className="text-[20px] font-semibold">2</span>
                <span className=" text-xs font-semibold">Hours</span>
              </span>
              <span className="flex flex-col p-4 bg-[#33281f80]/50 items-center">
                <span className="text-[20px] font-semibold">3</span>
                <span className=" text-xs font-semibold">Min</span>
              </span>
            </div>
            <span className="py-2 px-4 bg-[#33281F80]/50">
              Subject: {Featured.subject}
            </span>
          </div>
        </div>
        <div className="container flex md:hidden flex-col justify-center text-center">
          <h3
            className={cn(
              "text-[32px] text-[#594636] font-semibold text-center mt-6 mb-2",
              Messina_Serif.className
            )}
          >
            Upcoming webinar
          </h3>
          <p
            className={cn(
              "text-[#A07E62] text-xl font-semibold mb-6",
              Messina_Serif.className
            )}
          >
            {Featured.title}
          </p>
          <div
            className={cn(
              "flex gap-1 text-white justify-center",
              Messina_Serif.className
            )}
          >
            <span className="flex flex-col p-4 bg-[#33281f80]/50 items-center">
              <span className="text-[20px] font-semibold">1</span>
              <span className=" text-xs font-semibold">Days</span>
            </span>
            <span className="flex flex-col p-4 bg-[#33281f80]/50 items-center">
              <span className="text-[20px] font-semibold">2</span>
              <span className=" text-xs font-semibold">Hours</span>
            </span>
            <span className="flex flex-col p-4 bg-[#33281f80]/50 items-center">
              <span className="text-[20px] font-semibold">3</span>
              <span className=" text-xs font-semibold">Min</span>
            </span>
          </div>
          <div
            className={cn(
              "mt-4 mb-6 text-xs text-white flex justify-between",
              Messina_Serif.className
            )}
          >
            <span className=" py-2 px-4 bg-[#33281F80]/50">
              Lang: {Featured.languages}
            </span>
            <span className="py-2 px-4 bg-[#33281F80]/50">
              Subject: {Featured.subject}
            </span>
          </div>

          <Link
            className="py-4 my-3 px-[48px] mx-auto text-white bg-[#497D59] font-bold w-fit text-center "
            href={"/"}
          >
            Register
          </Link>
        </div>
      </>
    );
  }
};
