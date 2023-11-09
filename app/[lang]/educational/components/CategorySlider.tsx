"use client";
import { register } from "swiper/element/bundle";
import { useRef, useEffect, useState, Dispatch, use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRightIcon , ChevronLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { getUniversitiesByCategory } from "@/actions/educational";
import { useParams } from "next/navigation";
interface CategorySliderProps {
  categories: Category[];
  setUniversitiesState: any;
}



const CategorySlider: React.FC<CategorySliderProps> = ({
  categories,
  setUniversitiesState,
}) => {
  const params = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState(false);
  const swiperRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  //@ts-ignore
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const fetchData = async (cate: any) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}university/index-by-category?lang=${params.lang}&category=${category}`
      );

      const response = await res.json();
      if(response)
      {

        setUniversitiesState(response);
      }else{
        setUniversitiesState([]);
      }
      
      
    };

    if (category) {
       fetchData(category);
    }
  }, [category]);

  const handleClick = async (ct: Category) => {
    //@ts-ignore
    setCategory(ct.id);
  };



  const cate =
    categories &&
    categories.map((category) => (
      <SwiperSlide
        className=" bg-blue-400"
        key={category.id}
        onClick={() => handleClick(category)}
      >
        <div className="w-full hover:bg-[#497D59]  cursor-pointer  hover:text-white transition-all text-xs text-center font-semibold px-4 md:px-6 py-2  md:py-3 bg-white ">
          {category.title}
        </div>
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
        onSlideChange={handleSlideChange}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        loop={true}
        // dir="rtl"
        // navigation={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        // onSlideChange={handleSlideChange}

        className="mySwiper"
      >
        {cate}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
