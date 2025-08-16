import React from 'react'
import { ProductItem } from './product-item'
import { Button } from '@/components/ui/button'
import Title from '../../components/title'
import { Locale } from '@/i18n-config'
import { getHomeSpecial } from '@/actions/persian-store'


interface Product {
    id: number;
    name: string;
    price: number;
    old_price: number;
    image: string;
}

export const SpecialProducts = async ({ lang }: { lang: Locale }) => {

    const products = await getHomeSpecial(lang)

    return (
        <div className='mt-[48px] lg:mt-[80px]'>

            <Title title='special sale' />

            <div className=' container mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6'>
                {products.map((products: Product) => (
                    <ProductItem key={products.id} {...products} />
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
