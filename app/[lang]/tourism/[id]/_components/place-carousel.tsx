"use client"
import Image from 'next/image';

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Pagination, Navigation } from "swiper/modules";import React, {useCallback, useRef} from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import style from "@/app/[lang]/medicalService.module.css";
import {LocationItem} from "@/app/[lang]/have-your-own-trip/_components/locations/location-item";

interface  Items {
   id: number
    title: string
    image: string
}

export function PlaceCarousel({items}:{items:Items[]}) {

    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const sliderRef = useRef(null);

    const pagination = {
        el: ".containerForBullets",
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

    if (items.length === 0) {
        return null
    }
    return (
        <div className='w-full md:w-2/3 p-2 md:p-6 mt-10'>
            <h2 className='text-[24px] md:text-[32px] text-[#594636] font-semibold capitalize'>Places you’ll see</h2>
            <div className=" relative  lg:px-6">
                <div className="container">
                    <Swiper
                        ref={sliderRef}
                        slidesPerView={6}
                        spaceBetween={20}
                        pagination={pagination}
                        navigation={{
                            prevEl: navigationNextRef.current,
                            nextEl: navigationPrevRef.current,
                        }}

                        modules={[FreeMode, Pagination, Navigation]}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 6,
                            },
                            "@0.75": {

                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[200px]"
                    >

                        {items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={" aspect-square p-4 bg-white"}>
                                    <Image alt={""} width={320} height={242} className={" max-h-[170px] md:max-h-[240px] aspect-[1.3/1]"} src={item.image} />

                                    <h2 className={"text-[#594636] font-bold pt-4"}>{item.title}</h2>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

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

                <div className="flex containerForBullets mb-4 justify-center mt-[25px] md:mt-[45px] space-x-[10px]"></div>
            </div>
        </div>
    );
}

