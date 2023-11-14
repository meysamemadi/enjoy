"use client"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper/modules";
import NaturopathyItem from "./naturopathy-item";


const Naturopathy = ({
  dictionary,
}: {
  dictionary: {
    naturopathy_description: string;
  };
}) => {

 

     
  return (
    <div className="container ">
      <div className="bg-white px-0 md:px-[40px] lg:px-[65px] xl:px-[89px] py-2 md:py-4 lg:py-8 ">
        <p className="text-[#594636] text-sm font-medium mb-3 md:mb-6">
          {dictionary.naturopathy_description}
        </p>
        <div className=" hidden md:block">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Grid, Pagination]}
         
            className="mySwiper"
          >
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="block md:hidden">
          <Swiper
            slidesPerView={2}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
            <SwiperSlide>
              <NaturopathyItem name="abe garam" location="tehran" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
 
export default Naturopathy;