import Title from '@/app/[lang]/components/title'
import React from 'react'
import { TouristSayCarousel } from './tourist-say-carousel';

export const TouristSay = () => {
  return (
    <div>
      <Title title="Tourists say" />
      <div className="container">
        <div className="mt-6 md:mt-[40px]">
            <TouristSayCarousel />
        </div>
      </div>
    </div>
  );
}
