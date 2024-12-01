"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import cart1 from "@/public/image/cart1.png"
import { useCartStore } from '@/hooks/use-cart-store'


export const OrderSummery = () => {

    const { items, total } = useCartStore()
    const [isLoading, setIsLoading] = useState(true)
    const [clientTotal, setClientTotal] = useState(0)

    useEffect(() => {
        setClientTotal(total())
        setIsLoading(false)
    }, [total, items])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='w-full md:w-2/3 order-1 md:order-2 flex flex-col gap-2'>


            {items.length > 0 && items.map((item) => (

                <div key={item.id} className='flex  gap-6 md:gap-0  items-center justify-between px-4 lg:px-8 py-6 bg-white'>
                    <div className='flex items-center'>
                        <div className='flex flex-1 items-center'>
                            <Image src={item.image} width={64} height={64} alt='' />
                            <div className='flex flex-col ml-2 lg:ml-4'>
                                <h3 className=' text-base lg:text-2xl capitalize font-semibold text-[#A07E62]'>{item.name}</h3>
                                <p className=' text-sm lg:text-lg font-semibold text-[#259F82]'>${item.price}</p>
                            </div>
                        </div>
                    </div>

                    <span className=' font-medium text-[#594636]'>{item.quantity}</span>
                </div>

            ))}




            <div>
                <span className=' capitalize text-[#A07E62] text-[13px] font-semibold'>total</span>
                <div className='flex flex-col'>
                    <span className=' font-semibold text-[24px] md:text-[32px] text-[#259F82]'>${total()}</span>
                    <p className='text-sm font-medium leading-[150%] text-[#594636]'>Note: We will only charge you 15% of the total order amount.</p>

                </div>
            </div>

        </div>
    )
}
