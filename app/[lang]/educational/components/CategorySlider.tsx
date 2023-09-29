"use client";
import { register } from "swiper/element/bundle";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRightIcon , ChevronLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface CategorySliderProps {
  categories: Category[];
}
const CategorySlider: React.FC<CategorySliderProps> = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

   const handleSlideChange = (swiper) => {
     setActiveIndex(swiper.activeIndex);
   };



  const cate =
    categories &&
    categories.map((category) => (
      <SwiperSlide
        className="hover:bg-[#497D59] cursor-pointer  hover:text-white transition-all text-sm text-center font-semibold px-4 md:px-6 py-2  md:py-3 bg-white "
        key={category.id}
      >
        <span>{category.title}</span>
      </SwiperSlide>
    ));

  return (
    <div className="container relative   mt-4 md:mt-10">
      <div className="">
        <button
          className="absolute right-0 translate-y-[50%] "
          ref={navigationNextRef}
          disabled={activeIndex === categories.length - 1}
        >
          <ChevronRightIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
        <button
          className="absolute left-0 translate-y-[50%]"
          ref={navigationPrevRef}
          disabled={activeIndex === 0}
        >
          <ChevronLeftIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={10}
        onSlideChange={handleSlideChange}
        // dir="rtl"
        // navigation={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        // onSlideChange={handleSlideChange}
       breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }} 
        className="mySwiper"
      >
        {cate}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
