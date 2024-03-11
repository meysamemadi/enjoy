"use client";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import style from "@/app/[lang]/medicalService.module.css";

import t1 from "@/public/image/t1.png";
import t2 from "@/public/image/t2.png";
import t3 from "@/public/image/t3.png";
import {LocationItem} from "./location-item";
import { Button } from "@/components/ui/button";
import { useCallback, useRef } from "react";
export const LocationCarousel = () => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const sliderRef = useRef(null);

  const pagination = {
    el: ".containerForBullets",
    clickable: true,
    bulletClass: style.bulletClass,
    bulletActiveClass: style.bulletActiveClass,
  };

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
    <div className=" relative  lg:px-6">
      <div className="container">
        <Swiper
          ref={sliderRef}
          slidesPerView={6}
          spaceBetween={20}
          pagination={pagination}
          navigation={{
            prevEl: navigationNextRef.current,
            nextEl: navigationPrevRef.current,
          }}
          grid={{
            rows: 2,
            fill: "row",
          }}
          modules={[FreeMode, Grid, Pagination, Navigation]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 6,
              grid: {
                rows: 3,
                fill: "row",
              },
            },
            "@0.75": {
              grid: {
                rows: 2,
                fill: "row",
              },
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[200px]"
        >
          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t2.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t2.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t3.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t1.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t2.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t3.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t1.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t2.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t3.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t1.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t2.src}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LocationItem
              id={1}
              title="Sheikh Lotfollah Mosque"
              image={t3.src}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        onClick={handleslidePrevClick}
        ref={navigationPrevRef}
        className="tourism-special-tours-prev cursor-pointer hidden md:block absolute w-fit h-fit  top-1/2  md:right-0 2xl:-right-[2%] inset-y-0 -translate-y-1/2 -mt-[2%]"
      >
        <SlArrowRight className="w-[20px] h-[40px] text-[#594636]" />
      </div>
      <div
        onClick={handleslideNextClick}
        ref={navigationNextRef}
        className="tourism-special-tours-next cursor-pointer hidden md:block absolute w-fit h-fit  top-1/2 md:left-0 2xl:-left-[2%] inset-y-0 -translate-y-1/2 -mt-[2%]"
      >
        <SlArrowLeft className="w-[20px] h-[40px] text-[#594636]" />
      </div>

      <div className="flex containerForBullets mb-4 justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>
    </div>
  );
};
