"use client";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Pagination, Navigation } from "swiper/modules";
import img1 from "@/public/img/base/k1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import style from "@/app/[lang]/styles/base.module.css";

import { useCallback, useRef } from "react";
import { Item } from "./item";

export const KnowIranCarousel = () => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const sliderRef = useRef(null);

  const pagination = {
    el: ".knowIranBetter",
    clickable: true,
    bulletClass: style.bulletClassStore,
    bulletActiveClass: style.bulletActiveClassStore,
  };

  return (
    <div className=" container md:hidden mt-4">
      <Swiper
        ref={sliderRef}
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
            slidesPerView: 2.3,
            spaceBetween: 16,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          "@0.75": {
            grid: {
              rows: 2,
              fill: "row",
            },
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="mySwiper  px-4"
      >
        <SwiperSlide>
          <Item id={1} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={2} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={3} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={4} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={5} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={6} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={7} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={8} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={9} name="foods" image={img1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Item id={10} name="foods" image={img1.src} />
        </SwiperSlide>
      </Swiper>

      <div className="flex knowIranBetter mb-4 justify-center mt-[25px] space-x-[10px]"></div>
    </div>
  );
};
