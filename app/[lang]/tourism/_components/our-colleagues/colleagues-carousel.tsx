'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ColleagueItem } from "./colleague-item";


export const ColleaguesCarousel = () => {
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
        pagination={true}
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
    </div>
  );
};
