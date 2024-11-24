import { Locale } from '@/i18n-config'
import React from 'react'
import { Restaurants } from './restaurant'
import { getRestaurants } from '@/actions/have-your-own-trip'
import { Traditionals } from './traditional'

export const ResturantContainer = async ({ lang, searchParams }: { lang: Locale, searchParams: { [key: string]: string | string[] | undefined } }) => {


  const restaurants = await getRestaurants(lang, searchParams)


  return (
    <div className='flex flex-col gap-4 mt-4 h-full'>
      <Restaurants restaurants={restaurants} />

      <Traditionals restaurants={restaurants} />
    </div>
  )
}
