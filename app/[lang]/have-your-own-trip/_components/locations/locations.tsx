import Title from '@/app/[lang]/components/title'
import React from 'react'
import { Cities } from './cities'
import { LocationCarousel } from './location-carousel'

export const Locations = () => {
  return (
    <div>
      <Title title='locations' />
      <div className=' mt-4 md:mt-6 space-y-4 md:space-y-6'>
        <Cities />

        <LocationCarousel />

      </div>
    </div>
  )
}
