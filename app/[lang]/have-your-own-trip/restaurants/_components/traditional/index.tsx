import Title from '@/app/[lang]/components/title'
import React from 'react'
import { RestaurantItem } from '../../../_components/restaurant-item'

export const Traditionals = ({ restaurants }: any) => {
  return (
    <>
      <Title title="Eco-Traditional" />

      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 w-full h-full">
        {
          restaurants.items.map((restaurant: any) =>
            <RestaurantItem
              key={restaurant.id}
              {...restaurant}
            />)
        }
      </div>
    </>
  )
}
