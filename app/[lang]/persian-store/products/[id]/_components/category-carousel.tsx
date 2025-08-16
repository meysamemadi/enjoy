"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { FreeMode, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import CategoryItem from "./category-item";
import img01 from "@/public/image/c1.png"



const CategoryCarousel = ({ categories , setChildren , setSelectedCategory ,selectedCategory ,handleCategorySelect}: any) => {

  const sliderRef = useRef(null);

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

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
    <div>
      <Swiper
        ref={sliderRef}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="container mySwiper "
      >
        {categories.map((category:any) => (
          <SwiperSlide key={category.id} >
            <CategoryItem
              id={category.id}
              title={category.title}
              image={category.image}
              child={category.children}
              setChildren={setChildren}
              onSelect={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
          </SwiperSlide>
        ))}



      </Swiper>

      <div className="flex md:hidden w-full items-center space-x-6 justify-end mt-[14px]">
        <Button
          ref={navigationPrevRef}
          onClick={handleslidePrevClick}
          variant={"ghost"}
          size={"icon"}
        >
          <ChevronLeftIcon
            className="h-7 w-7 text-[#594636]"
            aria-hidden="true"
          />
        </Button>

        <Button
          ref={navigationNextRef}
          onClick={handleslideNextClick}
          variant={"ghost"}
          size={"icon"}
          className="p-0"
        >
          <ChevronRightIcon
            className="h-7 w-7 text-[#594636]"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
