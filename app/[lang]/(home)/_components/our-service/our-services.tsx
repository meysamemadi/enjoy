import Title from '@/app/[lang]/components/title'
import React from 'react'
import { Item } from './item';
import { Ri24HoursFill, RiEarthFill, RiMoneyPoundBoxFill, RiPlaneFill, RiSecurePaymentFill, RiStarSFill } from 'react-icons/ri';

export const OurServices = () => {
  return (
    <div className="mt-[24px] md:mt-[80px]">
      <Title title="our services" />
      <div className="container">
        <div className=" mt-[40px] bg-white flex flex-wrap md:flex-nowrap">
          <Item name="Best Selection" icon={RiStarSFill} />
          <Item name="Best PriceGuarantee" icon={RiMoneyPoundBoxFill} />
          <Item name="Payment Services" icon={RiSecurePaymentFill} />
          <Item name="24/7 Support" icon={Ri24HoursFill} />

          <Item name="Preparing visa of Iran" icon={RiEarthFill} />
          <Item name="Airfare" icon={RiPlaneFill} />
        </div>
      </div>
    </div>
  );
}
