"use client";

import React, { useCallback, useEffect, useRef } from "react";
import bodyContr from "@/public/img/Body contouring.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Category } from "@/types";

interface UniversityItemCarouselProps {
    categories: Category[]
}

export const UniversityItemCarousel = ({categories}:UniversityItemCarouselProps) => {
  const sliderRef = useRef(null);

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  const handleslideNextClick = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleslidePrevClick = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.swiper.slidePrev();
  }, []);

  return (
    <div >
   
      <div className="">
        <Swiper
          ref={sliderRef}
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={0}
          loop={false}
          pagination={{
            clickable: true,
          }}
          className="mySwiper h-[148px] md:h-[151px]"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
              {category.title}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Button
          ref={navigationPrevRef}
          onClick={handleslidePrevClick}
          variant={"ghost"}
          size={"icon"}
        >
          <ChevronUpIcon
            className="h-7 w-7 text-[#594636]"
            aria-hidden="true"
          />
        </Button>

        <Button
          ref={navigationNextRef}
          onClick={handleslideNextClick}
          variant={"ghost"}
          size={"icon"}
          className="p-0"
        >
          <ChevronDownIcon
            className="h-7 w-7 text-[#594636]"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};
