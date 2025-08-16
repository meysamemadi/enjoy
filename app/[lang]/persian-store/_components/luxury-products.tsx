import React from 'react'
import { ProductCarousel } from './product-carousel'
import Title from '../../components/title'
import { Locale } from '@/i18n-config'
import { getHomeLuxury } from '@/actions/persian-store'

export const LuxuryProducts = async({ lang }: { lang: Locale }) => {

     const products = await getHomeLuxury(lang)

    return (
        <div className=' mt-[48px] lg:mt-[80px] bg-[#1A191D] py-6'>


            <Title title='Luxury products' fontClass=' text-white' />

            <div className=' container text-white py-6'>



                <ProductCarousel products={products} />
            </div>

        </div>
    )
}
