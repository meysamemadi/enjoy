"use client";

import React, { useCallback, useEffect, useRef } from "react";
import bodyContr from "@/public/img/Body contouring.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Category } from "@/types";
import { Navigation } from "swiper/modules";
import { MotionDiv } from "@/app/[lang]/components/motion";

interface UniversityItemCarouselProps {
  categories: Category[]
}

export const Item = ({ category, index }: { category: Category, index: number }) => {

  return (
    <p
      className=" text-xs md:text-sm leading-[200%] line-clamp-2 w-full h-full "
    >
      {category.title}
    </p>
  );
}

export const UniversityItemCarousel = ({ categories }: UniversityItemCarouselProps) => {
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
    <>
      <Swiper
        ref={sliderRef}
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={8}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        className="mySwiper "
      >
        {categories.map((category, index) => (
          <SwiperSlide key={category.id}>
            <Item category={category} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mb-4 w-full self-center text-center  ">
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
    </>
  );


};
