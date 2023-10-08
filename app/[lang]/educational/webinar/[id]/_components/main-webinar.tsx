import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import webinar from "@/public/img/webinar.png";

interface MainWebinarProps{
  title: string;
  type:  "upcoming" | "webinar";
  subject? : string;
  langs ? : string
}


const MainWebinar = ({
  title,
  type,
  subject,
  langs
}: MainWebinarProps) => {
  return (
    <div className="mt-4 relative h-full w-full">
      <Image
        className=" w-full h-full object-cover object-center"
        src={webinar}
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
          Shahname Reading
        </p>
        <Link className="py-4 my-3 px-[48px] bg-[#497D59] font-bold" href={"/"}>
          Register
        </Link>
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-6  text-white right-6 p-4 hidden md:flex flex-nowrap justify-between items-end ",
          Messina_Serif.className
        )}
      >
        <span className=" py-2 px-4 bg-[#33281F80]/50">
          Lang: English , French
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
          Subject: Persian Culture
        </span>
      </div>

      <div className="bg-white flex flex-col justify-center items-center md:hidden">
        {type === "upcoming" && (
          <h4
            className={cn(
              Messina_Serif.className,
              "text-2xl text-center pt-4 pb-2 md:text-right font-semibold text-[#594636]"
            )}
          >
            Upcoming webinar
          </h4>
        )}
        <h2
          className={cn(
            Messina_Serif.className,
            "text-[20px] font-semibold text-[#A07E62] text-center mb-6"
          )}
        >
          {title}
        </h2>
        <div className="flex gap-1 text-white mb-2">
          <span className="flex flex-col p-1 bg-[#33281F]/50  items-center">
            <span className="text-[12px] font-semibold">1</span>
            <span className=" text-[6px] font-semibold">Days</span>
          </span>
          <span className="flex flex-col p-1 bg-[#33281F]/50 items-center">
            <span className="text-[12px] font-semibold">2</span>
            <span className=" text-[6px] font-semibold">Hours</span>
          </span>
          <span className="flex flex-col p-1 bg-[#33281F]/50 items-center">
            <span className="text-[12px] font-semibold">3</span>
            <span className=" text-[6px] font-semibold">Min</span>
          </span>
        </div>
        <div className="flex justify-center gap-2 text-white mb-6">

          <div className={cn(Messina_Serif.className,"text-white font-semibold text-[10px] p-2 bg-[#33281F80]/50")}>Lang: {langs}</div>  
          <div className={cn(Messina_Serif.className,"text-white font-semibold text-[10px] p-2 bg-[#33281F80]/50")}>Subject: {subject}</div>
        </div>
        <Link className="py-4 px-[48px] bg-[#497D59] text-white mb-4 capitalize" href={"/"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default MainWebinar;
