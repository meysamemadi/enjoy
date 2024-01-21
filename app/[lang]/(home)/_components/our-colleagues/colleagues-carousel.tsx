'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ColleagueItem } from "./colleague-item";

import style from "@/app/[lang]/medicalService.module.css";

export const ColleaguesCarousel = () => {

  const pagination = {
    el: ".bullestColleagues",
    clickable: true,
    bulletClass: style.bulletClass,
    bulletActiveClass: style.bulletActiveClass,
  };


  return (
    <div className="mt-[40px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.4,
          slideShadows: false,
        }}
        
        pagination={pagination}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide>
          <ColleagueItem name="snap" />
        </SwiperSlide>

        <SwiperSlide>
          <ColleagueItem name="sadad" />
        </SwiperSlide>

        <SwiperSlide>
          <ColleagueItem name="asdasdasd" />
        </SwiperSlide>

        <SwiperSlide>
          <ColleagueItem name="asdef" />
        </SwiperSlide>
      </Swiper>

      <div className="flex bullestColleagues mb-4 justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>
    </div>
  );
};
