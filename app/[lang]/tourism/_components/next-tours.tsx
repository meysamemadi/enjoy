'use client'
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import { FirstCarousel } from "./first-carousel";
import { SecondCarousel } from "./second-carousel";
import { useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";


export const NextTours = () => {


    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

   const handleslideNextClick = useCallback(() => {
     if (!sliderRef1.current) return;
     if (!sliderRef2.current) return;

     //@ts-ignore
     sliderRef1.current.swiper.slideNext();
     //@ts-ignore
     sliderRef2.current.swiper.slideNext();
   }, []);

   const handleslidePrevClick = useCallback(() => {
     if (!sliderRef1.current) return;
     if (!sliderRef2.current) return;

     //@ts-ignore
     sliderRef1.current.swiper.slidePrev();
     //@ts-ignore
     sliderRef2.current.swiper.slidePrev();
   }, []);

    return (
      <div className=" z-10 container flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/3">
            <p
              className={cn(
                " md:max-w-[322px]  text-[40px] md:text-[48px] font-semibold text-[#594636] mb-4 md:mb-6",
                Messina_Serif.className
              )}
            >
              Next 2 months’ tours
            </p>
            <p className=" text-sm md:text-lg text-[#594636] font-medium">
              Tours are scheduled for the next two months, each of which you can
              view.
            </p>
            <div className=" hidden md:block space-x-6 mt-6">
              <Button
                size={"icon"}
                onClick={handleslidePrevClick}
                ref={navigationNextRef}
                className=" bg-white/80 text-[#594636] rounded-none"
              >
                <BsChevronLeft className=" w-6 h-6" />
              </Button>
              <Button
                onClick={handleslideNextClick}
                ref={navigationPrevRef}
                className=" bg-white/80 text-[#594636] rounded-none"
                size={"icon"}
              >
                <BsChevronRight className=" w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <FirstCarousel
              sliderRef={sliderRef1}
              navigationNextRef={navigationNextRef}
              navigationPrevRef={navigationPrevRef}
            />
          </div>
        </div>
        <div>
          <SecondCarousel
            sliderRef={sliderRef2}
            navigationNextRef={navigationNextRef}
            navigationPrevRef={navigationPrevRef}
          />
        </div>
        <div className="flex items-center justify-between mb-4 md:hidden">
          <Button
            className=" bg-inherit rounded-none text-[#594636] border border-[594636] text-sm font-normal capitalize"
            asChild
          >
            <Link className="" href={"/"}>
              See More
            </Link>
          </Button>

          <div className=" space-x-6">
            <Button
              size={"icon"}
              onClick={handleslidePrevClick}
              ref={navigationNextRef}
              className=" bg-inherit text-[#594636] rounded-none"
            >
              <BsChevronLeft className=" w-6 h-6" />
            </Button>
            <Button
              onClick={handleslideNextClick}
              ref={navigationPrevRef}
              className="  bg-inherit text-[#594636] rounded-none"
              size={"icon"}
            >
              <BsChevronRight className=" w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    );
}
 
