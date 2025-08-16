import Title from '@/app/[lang]/components/title'
import React from 'react'
import { Filters } from './filters';
import { RestaurantAndCafeList } from './restaurant-and-cafe-list';
import { Locale } from '@/i18n-config';
import { getRestaurants } from '@/actions/have-your-own-trip';

export const RestaurantAndCafe = async ({lang , searchParams}: {lang:Locale , searchParams :{[key: string]: string | string[] | undefined }}) => {
   
  const restaurants = await getRestaurants(lang , searchParams)



  return (
    <div>
      <Title title="Restaurant and cafe" link={`/have-your-own-trip/restaurants`} linkeText='See All' />
      <Filters lang={lang} />
      <RestaurantAndCafeList  restaurants={restaurants}/>

    </div>
  );
}
