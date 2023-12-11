'use client'
import { useCallback, useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Pagination } from "swiper/modules";


import UniversityItem from "./UniversityItem";
import { University } from "@/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import style from "@/app/[lang]/medicalService.module.css";



interface UniversitiesGridProps {
  universities: University[];
}

const UniversitiesGrid = ({universities} : UniversitiesGridProps) => {

    const pagination = {
      el: ".containerForBullets",
      clickable: true,
      bulletClass: style.bulletClass,
      bulletActiveClass: style.bulletActiveClass,
    };


    return (
      <div className=" max-w-[1440px] relative mx-auto py-4 md:py-6">
        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={pagination}
            grid={{
              rows: 3,
              fill: "row",
            }}
            modules={[FreeMode, Grid, Pagination]}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              "@0.75": {
                grid: {
                  rows: 3,
                  fill: "row",
                },
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper medical-services container"
          >
            {universities &&
              universities.map((university, index) => (
                <SwiperSlide key={university.id}>
                  <UniversityItem index={index} {...university} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="containerForBullets flex justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>
      </div>
    );
 

 
}

export default UniversitiesGrid