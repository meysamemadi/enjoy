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
      <div className=" container mb-[48px] md:bm-[80px]">
        <div
          onClick={() => router.push(`${params.lang}/have-your-own-trip`)}
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

        <div className="flex h-full self-stretch mt-2 gap-2">
          <div
            onClick={() => router.push(`${params.lang}/educational`)}
            className="w-[50%] relative m-1 md:m-2 cursor-pointer"
          >
            <div className=" overflow-hidden">
              <Image
                alt=""
                src={studentImg}
                className="max-h-[540px] transition  w-full h-full object-cover object-center hover:scale-125"
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
          <div
            className="w-[50%] md:hidden relative m-1 md:m-2 cursor-pointer"
            onClick={() => router.push(`${params.lang}/tourism`)}
          >
            <div className=" overflow-hidden">
              <Image
                alt=""
                src={tourismTourImgMobile}
                className="max-h-[540px] transition  w-full h-full object-cover object-center"
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
          <div className="w-[50%] hidden md:flex md:flex-col h-full self-stretch">
            <div
              onClick={() => router.push(`${params.lang}/medical`)}
              className="relative m-1 md:m-2 cursor-pointer"
            >
              <div className=" overflow-hidden">
                <Image
                  alt=""
                  src={healthTourImg}
                  className="max-h-[352px] transition hover:scale-125  w-full h-full object-cover object-center"
                />
              </div>

              <div
                className={cn(
                  Messina_Serif.className,
                  " absolute bottom-2  text-white text-base md:text-[38px] font-bold  bg-[#47B9A4] -left-2 md:-left-3 w-fit"
                )}
              >
                <p className="px-3 py-2 leading-[85.2%] capitalize ">
                  Health Tour
                </p>
              </div>
            </div>
            <div
              onClick={() => router.push(`${params.lang}/tourism`)}
              className="hidden md:block relative m-1 md:m-2 cursor-pointer"
            >
              <div className=" overflow-hidden">
                <Image
                  alt=""
                  src={tourismTourImg}
                  className=" transition hover:scale-125 max-h-[352px]  w-full h-full object-cover object-center"
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
        <div 
        onClick={() => router.push(`${params.lang}/medical`)}
        className=" md:hidden relative m-1 md:m-2">
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
