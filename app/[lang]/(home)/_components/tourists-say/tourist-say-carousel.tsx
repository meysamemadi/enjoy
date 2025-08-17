"use client";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import style from "@/app/[lang]/styles/owntrip.module.css";
import { SayItem } from "./say-item";
import { Button } from "@/components/ui/button";
import { useCallback, useRef } from "react";

type CommentsProps = {
  id: number;
  name: string;
  comment: string;
  profile: string;
  country: string;
}

export const TouristSayCarousel = ({comments}:{comments:CommentsProps[]}) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const sliderRef = useRef(null);

  const pagination = {
    el: ".containerForBulletsStore",
    clickable: true,
    bulletClass: style.bulletClassStore,
    bulletActiveClass: style.bulletActiveClassStore,
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
            slidesPerView: 1,
            spaceBetween: 1,
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="mySwiper max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[200px]"
      >

        {comments.map((comment: CommentsProps) => (
            <SwiperSlide key={comment.id}>
              <SayItem {...comment} />
            </SwiperSlide>
        ))}



        
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

      <div className="flex containerForBulletsStore mb-4 justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>
   
    </div>
  );
};
