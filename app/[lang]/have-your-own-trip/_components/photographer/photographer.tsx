import Title from '@/app/[lang]/components/title'
import React from 'react'
import { City } from './city';
import { Collapse } from './collapse';
import { PhotographerCarousel } from './photographer-carousel';

export const Photographer = () => {
  return (
    <>
      <Title title="Reservation of Photographer and cameraman" />
      <City />

      <div className="container ">
        <div className="p-4 md:p-[32px] bg-white">
          <div >
            <Collapse />
            <PhotographerCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
