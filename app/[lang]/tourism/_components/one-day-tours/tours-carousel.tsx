"use client";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import style from "@/app/[lang]/styles/tourism.module.css";

import t1 from "@/public/image/t1.png";
import t2 from "@/public/image/t2.jpg";
import t3 from "@/public/image/t3.png";
import TourItem from "./tour-item";
import { Button } from "@/components/ui/button";
import { useCallback, useRef } from "react";

export const ToursCarousel = () => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const sliderRef = useRef(null);

  const pagination = {
    el: ".containerForBulletsTourism",
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
    <div className=" relative container lg:px-6">
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
            slidesPerView: 1.2,
            spaceBetween: 6,
            grid: {
              rows: 1,
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

      <div className="hidden md:flex containerForBulletsTourism mb-4 justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>
      <div className=" flex md:hidden items-center w-full justify-between my-4 ">
        <Button className=" bg-inherit text-[#594636] border border-[#594636] rounded-none">
          See More
        </Button>
        <div className="flex space-x-4">
          <div
            onClick={handleslideNextClick}
            ref={navigationNextRef}
            className="tourism-special-tours-next cursor-pointer  w-fit h-fit "
          >
            <SlArrowLeft className="w-[20px] h-[40px] text-[#594636]" />
          </div>

          <div
            onClick={handleslidePrevClick}
            ref={navigationPrevRef}
            className="tourism-special-tours-prev cursor-pointer  w-fit h-fit  "
          >
            <SlArrowRight className="w-[20px] h-[40px] text-[#594636]" />
          </div>
        </div>
      </div>
    </div>
  );
};
