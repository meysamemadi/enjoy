import { getAccommodationsCity } from '@/actions/have-your-own-trip';
import { Locale } from '@/i18n-config';
import React from 'react'
import { Cities } from './cities';

export const CityIndex = async ({ lang , searchParams } : { lang : Locale , searchParams: { [key: string]: string | string[] | undefined }}) => {
    const cities = await getAccommodationsCity(lang);

  return (
    <div className="my-6 md:mt-[30px] lg:mt-[40px] flex flex-col gap-6">
        <Cities cities={cities} lang={lang} />
    </div>
  )
}
