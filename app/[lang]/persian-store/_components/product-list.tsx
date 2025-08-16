import React from 'react'
import { ProductItem } from './product-item'
import { Button } from '@/components/ui/button'
import { getHomeProducts } from '@/actions/persian-store'
import { Locale } from '@/i18n-config'

export const ProductList = async ({ lang }: { lang: Locale }) => {

  const products = await getHomeProducts(lang)
  return (

    <div>

      <div className=' container mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6'>
        {products.map((product: any) => (
          <ProductItem key={product.id} {...product} />
        ))}

      </div>

      <div className=' flex justify-center mt-6'>
        <Button className=' rounded-none bg-inherit text-[#594636] border border-[#594636]'>
          Show More
        </Button>
      </div>
    </div>
  )
}
