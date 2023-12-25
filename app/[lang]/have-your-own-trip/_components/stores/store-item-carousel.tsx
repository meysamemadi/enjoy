"use client";

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
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoreItemCarouselProps {
    id: number;
    images: string[]
}

export const StoreItemCarousel = ({id , images}: StoreItemCarouselProps) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);

      const pagination = {
        el: ".containerForBulletsStoreItem" + id,
        clickable: true,
        bulletClass: style.bulletClassStoreItem,
        bulletActiveClass: style.bulletActiveClassStoreItem,
      };

  return (
    <div className=" relative aspect-square">
      <Swiper
        pagination={pagination}
        slidesPerView={1}
        modules={[FreeMode, Pagination]}
        className=" relative mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image fill className="aspect-square object-cover" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={cn(
          " absolute bottom-6 left-0 right-0 w-full h-6  flex z-30  -mb-4 justify-center space-x-[10px]",
          `containerForBulletsStoreItem${id}`
        )}
      ></div>
    </div>
  );
};
