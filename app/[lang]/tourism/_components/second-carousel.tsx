'use client'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Grid, Navigation, Pagination } from "swiper/modules";
import TourItem from "./tour-item";

import t1 from "@/public/image/t1.png";
import t2 from "@/public/image/t2.jpg";
import t3 from "@/public/image/t3.png";


export const SecondCarousel = ({
  sliderRef,
  navigationNextRef,
  navigationPrevRef,
}) => {
  return (
    <Swiper
      ref={sliderRef}
      slidesPerView={1}
      spaceBetween={24}
      loop={true}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },

        "@0.75": {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      modules={[Navigation]}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <TourItem
          id={1}
          title="Weaving original Iranian carpets"
          image={t1.src}
          price="$406.27"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TourItem
          id={1}
          title="Weaving original Iranian carpets"
          image={t2.src}
          price="$406.27"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TourItem
          id={1}
          title="Weaving original Iranian carpets"
          image={t3.src}
          price="$406.27"
        />
      </SwiperSlide>
      <SwiperSlide>
        <TourItem
          id={1}
          title="Weaving original Iranian carpets"
          image={t1.src}
          price="$406.27"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TourItem
          id={1}
          title="Weaving original Iranian carpets"
          image={t2.src}
          price="$406.27"
        />
      </SwiperSlide>

      <SwiperSlide>
        <TourItem
          id={1}
          title="Weaving original Iranian carpets"
          image={t3.src}
          price="$406.27"
        />
      </SwiperSlide>
    </Swiper>
  );
};
 
