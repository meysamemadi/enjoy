import Title from '@/app/[lang]/components/title'
import React from 'react'
import { Filters } from './filters';
import { RestaurantAndCafeList } from './restaurant-and-cafe-list';

export const RestaurantAndCafe = () => {
  return (
    <div>
      <Title title="Restaurant and cafe" />
      <Filters />
      <RestaurantAndCafeList  />

    </div>
  );
}
