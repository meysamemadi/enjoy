import Title from "@/app/[lang]/components/title";
import React from "react";
import { IranProvinceCarousel } from "./iran-province-carousel";
import {Locale} from "@/i18n-config";
import {IranProvinceData} from "@/actions/base";

export const IranProvince = async ({ lang }:{lang:Locale}) => {

    const data = await IranProvinceData(lang);

  return (
    <div className="mt-[48px] md:mt-[80px]">
      <Title title="Iran’s province" link="" linkeText="see all" />
      <div className="container mt-4 md:mt-[40px]">
        <IranProvinceCarousel items={data.items} />
      </div>
    </div>
  );
};
