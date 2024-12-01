"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import p1 from "@/public/image/p1.jpg"
import { Plus } from 'lucide-react'
import { useCartStore } from '@/hooks/use-cart-store'

interface ProductsProps {
    id: number;
    name: string;
    price: number;
    old_price: number;
    image: string;
}

export const ProductItem = ({ id, name, price, old_price, image }: ProductsProps) => {

    const {  addItem, items } = useCartStore()
    const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({})

    const handleAddToCart = (product: any) => {
        console.log("clicled !",product.id)
        addItem(product)
        setAddedItems(prev => ({ ...prev, [product.id]: true }))
        setTimeout(() => {
            setAddedItems(prev => ({ ...prev, [product.id]: false }))
        }, 2000)
    }


    return (
        <div className=' relative  bg-white h-full w-full flex flex-col p-2 lg:p-4'>

            <button
                onClick={() => handleAddToCart({ id, name, price, image })}
                disabled={addedItems[id]}
                className=' w-6 h-6 absolute top-4 left-4 flex items-center justify-center bg-[rgba(169,141,105,0.10)] border border-[rgba(198,178,161,1)] p-1'>
                <Plus className=' text-[rgba(198,178,161,1)]' />
            </button>
            <Image src={image} width={258} height={258} className='w-full h-full object-cover' alt='' />
            <div className='mt-2'>
                <p className='my-2  leading-[normal] line-clamp-1 md:line-clamp-2 text-[#594636] font-bold'>
                    {name}
                </p>

                <p className=' text-[10px] text-[#594636] font-semibold  line-through'>${price}</p>
                <p className=' text-[#259F82] font-semibold'>${old_price}</p>
            </div>

        </div>
    )
}
