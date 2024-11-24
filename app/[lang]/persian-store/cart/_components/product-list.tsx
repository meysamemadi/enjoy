import React from 'react'
import { ProductItem } from './product-item'

export const ProductList = () => {
  return (
    <div className='flex flex-col gap-4 mt-6 container mx-auto'>
        <ProductItem />
        <ProductItem />

        
    </div>
  )
}
