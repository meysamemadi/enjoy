'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import style from "@/app/[lang]/styles/tourism.module.css";
import { PhotographerItem } from "./photographer-item";
import { Button } from "@/components/ui/button";


export const PhotographerCarousel = ({ isFormValid , photographers , handleOptionToggle , selectedOptionIds , handleSubmit }: any) => {

      const pagination = {
        el: ".containerForBulletsTourism",
        clickable: true,
        bulletClass: style.bulletClass,
        bulletActiveClass: style.bulletActiveClass,
      };


  return (
    <div className="mt-6 md:mt-[32px]">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={pagination}
        grid={{
          rows: 2,
          fill: "row",
        }}
        modules={[FreeMode, Grid, Pagination, Navigation]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 16,
            grid: {
              rows: 4,
              fill: "row",
            },
          },
          "@0.75": {
            grid: {
              rows: 2,
              fill: "row",
            },
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper max-w-[1440px] mx-auto px-4 md:px-6 "
      >

        {photographers.map((photographers:any) => (
          <SwiperSlide key={photographers.id}>
          <PhotographerItem handleOptionToggle={handleOptionToggle} selectedOptionIds={selectedOptionIds}  {...photographers} />
        </SwiperSlide>
        ))}
        
       
      </Swiper>

      <div className="flex container justify-between items-center mt-[14px] md:mt-[30px]">
        <div className="flex containerForBulletsTourism  space-x-[10px]"></div>
        <Button
        onClick={handleSubmit}
        disabled={!isFormValid} className="text-base px-[48px] py-4 rounded-none font-bold capitalize leading-[85.2%] text-[#FAF7F5] bg-[#F07148]">
          submit
        </Button>
      </div>
    </div>
  );
}
