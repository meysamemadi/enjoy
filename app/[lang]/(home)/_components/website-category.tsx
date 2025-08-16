'use client'
import Image from "next/image";
import haveImg from "@/public/img/base/have_your_own_trip.png";
import studentImg from "@/public/img/base/student.png";
import healthTourImg from "@/public/img/base/health-tour.png";
import healthTourImgMobile from "@/public/img/base/health-tour-mobile.png";
import tourismTourImg from "@/public/img/base/tourism-tour.png";
import tourismTourImgMobile from "@/public/img/base/tourism-tour-mobile.png";
import haveImgMobile from "@/public/img/base/have_your_own_trip-mobile.png";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import { useParams, useRouter } from "next/navigation";

export const WebsiteCategory = () => {

  const router = useRouter();
  const params = useParams();
  return (
    <div className="flex flex-col gap-4 container mb-[48px] md:bm-[80px]">
      <div
        onClick={() => window.open(`${params.lang}/have-your-own-trip`,'_blank')}
        className="  relative m-1 md:m-2 cursor-pointer"
      >
        <div className=" overflow-hidden">
          <Image
            alt=""
            src={haveImg}
            className="hidden md:block transition hover:scale-125 max-h-[262px]  w-full h-full object-cover object-center"
          />
          <Image
            alt=""
            src={haveImgMobile}
            className="block md:hidden max-h-[262px]  w-full h-full object-cover object-center"
          />
        </div>

        <div
          className={cn(
            Messina_Serif.className,
            " absolute bottom-2  text-white text-base md:text-[48px] font-bold  bg-[#A07E62] -left-2 md:-left-3 w-fit"
          )}
        >
          <p className="px-3 py-2 leading-[85.2%] ">Have your own trip</p>
        </div>
      </div>

      <div className="flex gap-6 max-h-[540px] h-full ">
        <div className=" w-[50%] md:w-[45%] h-[256px] md:h-[540px] relative   cursor-pointer"
          onClick={() => window.open(`${params.lang}/educational`,"_blank")}
        >
          <div className="w-full h-[256px] md:h-[540px] relative overflow-hidden">
            <Image
              alt=""
              fill
              src={studentImg}
              className="transition object-cover object-center hover:scale-125"
            />
          </div>


          <div
            className={cn(
              Messina_Serif.className,
              " absolute bottom-2  text-white text-base md:text-[38px] font-bold  bg-[#497D59E5] -left-2 md:-left-3 w-fit"
            )}
          >
            <p className="px-3 py-2 leading-[85.2%] capitalize ">
              Student Travel Tour
            </p>
          </div>
        </div>
        <div className="w-[50%] h-[256px] md:hidden relative  cursor-pointer"
          onClick={() => window.open(`${params.lang}/tourism`,"_blank")}
        >
          <div className="w-full h-[256px] relative overflow-hidden">
            <Image
              fill
              alt=""
              src={tourismTourImgMobile}
              className=" transition  w-full h-full object-cover object-center"
            />
          </div>

          <div
            className={cn(
              Messina_Serif.className,
              " absolute bottom-2  text-white text-base md:text-[38px] font-bold  bg-[#C43336E5] -left-2 md:-left-3 w-fit"
            )}
          >
            <p className="px-3 py-2 leading-[85.2%] capitalize ">
              Tourism Tour
            </p>
          </div>
        </div>
        <div className="w-[55%] h-full max-h-[540px] hidden md:flex md:flex-col gap-6">
          <div className="relative cursor-pointer  h-[259px] max-h-[259px]"
            onClick={() => window.open(`${params.lang}/medical`,"_blank")}
          >

            <div className="h-[259px] w-full relative overflow-hidden">

              <Image
                alt=""
                fill
                src={healthTourImg}
                className="transition w-full h-full hover:scale-125 object-cover object-center"
              />
            </div>



            <div
              className={cn(
                Messina_Serif.className,
                " absolute bottom-2 cursor-pointer  text-white text-base md:text-[38px] font-bold  bg-[#47B9A4] -left-2 md:-left-3 w-fit"
              )}
            >
              <p className="px-3 py-2 leading-[85.2%] capitalize ">
                Health Tour
              </p>
            </div>
          </div>
          <div
            onClick={() => window.open(`${params.lang}/tourism`,"blank")}
            className="hidden h-[259px] max-h-[259px] md:block relative  cursor-pointer"
          >

            <div className="h-[259px] w-full relative overflow-hidden">

              <Image
                alt=""
                fill
                src={tourismTourImg}
                className=" transition hover:scale-125   w-full h-full object-cover object-center"
              />
            </div>


            <div
              className={cn(
                Messina_Serif.className,
                " absolute bottom-2  text-white text-base md:text-[38px] font-bold  bg-[#C43336E5] -left-2 md:-left-3 w-fit"
              )}
            >
              <p className="px-3 py-2 leading-[85.2%] capitalize ">
                Tourism Tour
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden relative m-1 md:m-2"
        onClick={() => window.open(`${params.lang}/medical`,"blank")}>
        <Image
          alt=""
          src={healthTourImgMobile}
          className="block md:hidden max-h-[262px]  w-full h-full object-cover object-center"
        />
        <div
          className={cn(
            Messina_Serif.className,
            " absolute bottom-2  text-white text-base md:text-[48px] font-bold  bg-[#47B9A4E5] -left-2 md:-left-3 w-fit"
          )}
        >
          <p className="px-3 py-2 leading-[85.2%] ">Health Tour</p>
        </div>
      </div>
    </div>
  );
}
