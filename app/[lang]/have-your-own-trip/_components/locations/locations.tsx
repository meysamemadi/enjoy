import Title from '@/app/[lang]/components/title'
import React from 'react'
import { Cities } from './cities'
import { LocationCarousel } from './location-carousel'
import { Locale } from '@/i18n-config'
import { getAccommodationsCity, getLocations } from '@/actions/have-your-own-trip'

export const Locations = async ({lang , searchParams}: {lang:Locale , searchParams :{[key: string]: string | string[] | undefined }}) => {

  const cities = await getAccommodationsCity(lang);
  const locations = await getLocations(lang ,searchParams );

  return (
    <div>
      <Title title='locations' />
      <div className=' my-4 md:my-6 space-y-4 md:space-y-6'>
        <Cities lang={lang} cities={cities} />
        <LocationCarousel locations={locations.items} />
      </div>
    </div>
  )
}
