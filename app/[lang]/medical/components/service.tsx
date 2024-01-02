"use client";

import Image from "next/image";
import h1 from "@/public/h1.png";
import { MedicalSpecialService } from "@/types";
import { useParams, useRouter } from "next/navigation";

const ServiceItem = ({
  id,
  title,
  short_description,
  subtitle_one,
  subtitle_two,
  description_one,
  description_two,
  image,
  image_bg,
  image_one,
  image_two,
}: MedicalSpecialService) => {

  const router = useRouter();
  const params = useParams()
  return (
    <div onClick={()=> router.push(`/${params.lang}/medical/special-service/${id}`)} className=" cursor-pointer group w-full h-full max-h-[334px] relative">
      <Image
        width={"1000"}
        height={"500"}
        className=" block   w-full h-full object-cover"
        src={image}
        alt=""
      />
      <div className=" text-white  font-bold transition-all ease-in-out absolute bg-[#43B8A2]/70 tran h-[100px] group-hover:h-full  w-full bottom-0 justify-center flex items-center">
        {title}
      </div>
    </div>
  );
};

export default ServiceItem;
