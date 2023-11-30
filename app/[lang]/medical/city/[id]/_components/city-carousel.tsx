"use client";
import React, { useCallback, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CityItem from "./city-item";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { FreeMode, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";

const CityCarousel = () => {
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
    <div>
      <Swiper
        ref={sliderRef}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6.5,
            spaceBetween: 50,
          },
        }}
        className="container mySwiper "
      >
        <SwiperSlide>
          <CityItem id="2" name="rasht" active />
        </SwiperSlide>
        <SwiperSlide>
          <CityItem id="2" name="rasht" />
        </SwiperSlide>
        <SwiperSlide>
          <CityItem id="2" name="rasht" />
        </SwiperSlide>
        <SwiperSlide>
          <CityItem id="2" name="rasht" />
        </SwiperSlide>
        <SwiperSlide>
          <CityItem id="2" name="rasht" />
        </SwiperSlide>
        <SwiperSlide>
          <CityItem id="2" name="rasht" />
        </SwiperSlide>
        <SwiperSlide>
          <CityItem id="2" name="rasht" />
        </SwiperSlide>
        <SwiperSlide>
          <CityItem id="2" name="rasht" />
        </SwiperSlide>
      </Swiper>

      <div className="flex md:hidden w-full items-center space-x-6 justify-end mt-[14px]">
        <Button
          ref={navigationPrevRef}
          onClick={handleslidePrevClick}
          variant={"ghost"}
          size={"icon"}
        >
          <ChevronLeftIcon
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
          <ChevronRightIcon
            className="h-7 w-7 text-[#594636]"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};

export default CityCarousel;
