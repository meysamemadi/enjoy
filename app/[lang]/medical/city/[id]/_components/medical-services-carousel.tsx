"use client";

import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import style from "@/app/[lang]/medicalService.module.css"

import { FreeMode, Navigation, Grid, Pagination } from "swiper/modules";
import MedicalServiceItem from "./medical-service-item";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const MedicalServicesCarousel = () => {
  const sliderRef = useRef(null);

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

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
    <div className=" max-w-[1440px] relative mx-auto">
      <div className="container">
        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={20}
          pagination={pagination}
          grid={{
            rows: 2,
            fill: "row",
          }}
          modules={[FreeMode, Navigation, Grid, Pagination]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
              grid: {
                rows: 3,
                fill: "row",
              },
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper medical-services container"
        >
          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>

          <SwiperSlide>
            <MedicalServiceItem />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="containerForBullets flex justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>

      <SlArrowLeft
        ref={navigationPrevRef}
        onClick={handleslidePrevClick}
        className="hidden md:block cursor-pointer absolute z-10 top-1/2 -mt-11 left-0 right-auto h-[40px] w-[20px] text-[#594636]"
        aria-hidden="true"
      />

      <SlArrowRight
        ref={navigationPrevRef}
        onClick={handleslideNextClick}
        className="hidden md:block cursor-pointer absolute z-10 top-1/2 -mt-11 right-0 left-auto h-[40px] w-[20px] text-[#594636]"
        aria-hidden="true"
      />
    </div>
  );
};

export default MedicalServicesCarousel;
