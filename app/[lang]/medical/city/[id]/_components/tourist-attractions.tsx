'use client'

import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FreeMode, Navigation, Grid, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import style from "@/app/[lang]/touristAttractions.module.css";
import TouristAttractionsItem from "./tourist-attractions-item";


const TouristAttractions = () => {

     const sliderRef = useRef(null);

     const navigationNextRef = useRef(null);
     const navigationPrevRef = useRef(null);

     const pagination = {
       el: ".containerForBulletsAttractions",
       clickable: true,
       bulletClass: style.bulletClassAttraction,
       bulletActiveClass: style.bulletActiveClassAttraction,
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
      <div className="max-w-[1440px] relative mx-auto">
        <div className="container">
          <Swiper
            ref={sliderRef}
            slidesPerView={3}
            spaceBetween={20}
            pagination={pagination}
            modules={[FreeMode, Navigation, Pagination, Grid]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
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
            className="mySwiper tourist_attractions container"
          >
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
            <SwiperSlide>
              <TouristAttractionsItem />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="containerForBulletsAttractions flex justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>

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
}
 
export default TouristAttractions;