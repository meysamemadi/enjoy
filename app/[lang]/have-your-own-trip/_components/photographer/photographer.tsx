import Title from '@/app/[lang]/components/title'
import React from 'react'
import { City } from './city';
import { Collapse } from './collapse';
import { PhotographerCarousel } from './photographer-carousel';
import { getAccommodationsCity, getPhotographers } from '@/actions/have-your-own-trip';
import { Locale } from '@/i18n-config';
import { PhotographerForm } from './photographer-form';

export const Photographer =  async ({lang , searchParams}: {lang:Locale , searchParams :{[key: string]: string | string[] | undefined }}) => {


  const cities = await getAccommodationsCity(lang);
  const photographers = await getPhotographers(lang)


  return (
    <>
      <Title title="Reservation of Photographer and cameraman" />
      <PhotographerForm photographers={photographers} cities={cities} />
    </>
  );
}
