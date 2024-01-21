import Title from "@/app/[lang]/components/title";
import React from "react";
import { IranProvinceCarousel } from "./iran-province-carousel";

export const IranProvince = () => {
  return (
    <div className="mt-[48px] md:mt-[80px]">
      <Title title="Iran’s province" link="" linkeText="see all" />
      <div className="container mt-4 md:mt-[40px]">
        <IranProvinceCarousel />
      </div>
    </div>
  );
};
