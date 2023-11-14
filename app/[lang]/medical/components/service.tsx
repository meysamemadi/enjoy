'use client'

import Image from "next/image";
import h1 from "@/public/h1.png"

const Service = () => {
    return (
      <div className=" group w-full h-full max-h-[334px] relative">
        <Image
          width={"1000"}
          height={"500"}
          className=" block   w-full h-full object-cover"
          src={h1}
          alt=""
        />
        <div className=" text-white  font-bold transition-all ease-in-out absolute bg-[#43B8A2]/70 tran h-[100px] group-hover:h-full  w-full bottom-0 justify-center flex items-center">
          Dentistry
        </div>
      </div>
    );
}
 
export default Service;