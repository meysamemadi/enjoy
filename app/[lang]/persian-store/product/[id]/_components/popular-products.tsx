import Title from '@/app/[lang]/components/title'
import React from 'react'
import { ProductCarousel } from './product-carousel'

export const PopularProducts = () => {
  return (
    <div className=' mt-12 md:mt-8'>
        <Title title='popular products' />
        <ProductCarousel />
    </div>
  )
}
