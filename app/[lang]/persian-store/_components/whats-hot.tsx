"use client"
import React from 'react'
import Title from '../../components/title'
import Link from 'next/link'
import image01 from "@/public/img/store/major_shopping.png"
import image02 from "@/public/img/store/what_you_want.png"
import Image from 'next/image'
import { useParams } from 'next/navigation'

export const WhatsHot = () => {

    const { lang } = useParams();

  return (
    <div className=' mt-8 lg:mt-14'>
        <Title title='whats hot ... !' />
        <div className=' container mt-6 grid md:grid-cols-2 gap-4 md:gap-6'>

            <div className='flex flex-col'>

                <div className=' relative'>
                    <Image alt='' src={image01} className='w-full h-full object-cover' />

                    <div className=' absolute bottom-0  w-full flex flex-col px-6 lg:px-[40px] pb-4 lg:pb-2'>
                        <h3 className=' bg-white opacity-90 text-[#5D5747] w-fit py-4 px-2 text-[20px] lg:text-[33px] font-semibold mb-4'>Major shopping</h3>
                        <p className=' text-[9px] md:text-sm text-white font-medium'>If you desire to buy more products with lower prices or if you have a store in your country and wish to be our sales representative, it is enough to send us a message.</p>
                    </div>
                </div>
                <div className=' bg-[#DACAA0] py-5 lg:py-8 px-6 lg:px-12 '>
                    <Link className=' underline underline-offset-4 leading-[85.2%] text-[#594636] text-[20px] lg:text-[33px] font-semibold' href={`/${lang}/persian-store/major-shopping`}>
                        Form registration
                    </Link>
                </div>

            </div>


            <div className='flex flex-col'>

                <div className=' relative'>
                    <Image alt='' src={image02} className='w-full h-full object-cover' />

                    <div className=' absolute bottom-0  w-full flex flex-col px-6 lg:px-[40px] pb-4 lg:pb-2'>
                        <h3 className=' bg-white opacity-90 text-[#5D5747] w-fit py-4 px-2 text-[20px] lg:text-[33px] font-semibold mb-4'>Say what you want</h3>
                        <p className=' text-[9px] md:text-sm text-white font-medium'>If you intend to buy a special product or order making a product
                        according to your taste, it is enough to send us a message.</p>
                    </div>
                </div>
                <div className=' bg-[#DACAA0] py-5 lg:py-8 px-6 lg:px-12 '>
                    <Link className=' underline underline-offset-4 leading-[85.2%] text-[#594636] text-[20px] lg:text-[33px] font-semibold' href={`/${lang}/persian-store/you-want`}>
                        Form registration
                    </Link>
                </div>

            </div>

        </div>
        
    </div>
  )
}
