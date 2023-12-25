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

import t1 from "@/public/image/t1.png";
import t2 from "@/public/image/t2.png";
import t3 from "@/public/image/t3.png";
import { StoreItem } from "./store-item";
import { Button } from "@/components/ui/button";
import { useCallback, useRef } from "react";

export const StoresCarousel = () => {
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
             slidesPerView: 1.3,
             spaceBetween: 16,
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
           <StoreItem
             id={1}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={2}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={3}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={4}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={5}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={6}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={7}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={8}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={9}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={10}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={11}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
           />
         </SwiperSlide>

         <SwiperSlide>
           <StoreItem
             id={12}
             title="Sheikh Lotfollah Mosque"
             images={[t1.src, t2.src, t3.src]}
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

       <div className="hidden md:flex containerForBulletsStore mb-4 justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>
       <div className="block md:hidden mt-6 text-center">
         <Button className=" px-[48px] rounded-none bg-inherit border border-[#594636] text-[#594636] capitalize">
           see more
         </Button>
       </div>
     </div>
   );
};
