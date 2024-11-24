import React from 'react'
import { PhotographItem } from './photograph-item'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export const Photographers = ({ photographers }: any) => {
    return (
        <div className='my-6'>
            <h2 className='text-[#A07E62] font-semibold capitalize'>Photographer</h2>

            <ScrollArea className="w-full whitespace-nowrap">


                <div className='flex w-max space-x-4 py-4'>
                    {photographers.map((item: any) => <PhotographItem key={item.id} {...item} />)}
                </div>

                <ScrollBar orientation="horizontal" />
            </ScrollArea>

        </div>
    )
}
