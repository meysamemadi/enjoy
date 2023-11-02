import webinar from "@/public/img/webinar.png";
import Image from "next/image";
import { Messina_Serif } from "../../font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import WebinarItem from "./Webinar";
import { Webinar } from "@/types";

interface WebinarProps {
  webinars: Webinar[];
  featured: Webinar;
}
const Webinars = ({ webinars, featured }: WebinarProps) => {
  return (
    <div className=" container my-6 md:my-8">
      {featured && (
        <>
          <div className=" relative h-full w-full">
            <Image
              className=" w-full h-full object-cover object-center"
              src={featured.main_pic}
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
                {featured.title}
              </p>
              <Link
                className="py-4 my-3 px-[48px] bg-[#497D59] font-bold"
                href={"/"}
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
                Lang: {featured.languages}
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
                Subject: {featured.subject}
              </span>
            </div>
          </div>
          <div className="flex md:hidden flex-col justify-center text-center">
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
              {featured.title}
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
                Lang: {featured.languages}
              </span>
              <span className="py-2 px-4 bg-[#33281F80]/50">
                Subject: {featured.subject}
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
      )}

      <div className=" relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
        <span
          className={cn(
            "text-lg md:text-[32px] font-semibold text-[#A07E62]",
            Messina_Serif.className
          )}
        >
          Our last online webinars
        </span>
        <span className="text-[14px] text-[#594636] items-center font-semibold absolute right-0 -bottom-4 bg-[#FAF5EF] p-2 flex">
          See All <ChevronRightIcon size={15} />
        </span>
      </div>

      <div className="grid grid-cols-2 my-4 gap-4 md:gap-6">
        {webinars.map((webinar) => (
          <WebinarItem
            key={webinar.id}
            title={webinar.title}
            subject={webinar.subject}
            lang={webinar.languages}
            time="06 Jan 2021"
          />
        ))}
      </div>
    </div>
  );
};

export default Webinars;
