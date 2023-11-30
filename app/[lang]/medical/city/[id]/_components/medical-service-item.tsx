"use client";

import React, { useCallback, useEffect, useRef } from "react";
import bodyContr from "@/public/img/Body contouring.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";



const MedicalServiceItem = () => {

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
    <div className="h-[281px] md:h-[288px] bg-white flex flex-col items-center justify-center pt-6 space-y-4">
      <div className=" h-[72px] md:h-[88px] w-[72px] md:w-[72px]">
        <Image
          className="w-full h-full object-cover"
          width={88}
          height={88}
          src={bodyContr}
          alt="name"
        />
      </div>
      <p className="text-[#594636] text-sm font-bold">Hair loss treatment</p>

      <div className=" overflow-hidden text-center w-full items-center justify-center">
        <Swiper
          ref={sliderRef}
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={0}
          loop={false}
          pagination={{
            clickable: true,
          }}
          className="mySwiper h-[148px] md:h-[151px]"
        >
          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Rhinoplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Revision rhinoplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Blepharoplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Genioplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Rhinoplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Revision rhinoplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Blepharoplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Genioplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Rhinoplasty
          </SwiperSlide>

          <SwiperSlide className="text-[#594636] p-0 !h-[17px] my-[2px] m-0">
            Revision rhinoplasty
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Button
          ref={navigationPrevRef}
          onClick={handleslidePrevClick}
          variant={"ghost"}
          size={"icon"}
        >
          <ChevronUpIcon
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
          <ChevronDownIcon
            className="h-7 w-7 text-[#594636]"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};

export default MedicalServiceItem;
