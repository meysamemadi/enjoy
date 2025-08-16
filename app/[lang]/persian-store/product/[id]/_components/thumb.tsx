import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export const Thumb = ({ selected, index, src, onClick }: { selected: boolean, index: number, src: string, onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                'max-h-[48px] h-full max-w-[69px]',
                selected ? ' border-[1px] lg:border-[3px] border-primary' : ' ',
            )}
        >
            <Image
                width={69}
                height={48}
                className='w-full h-full object-cover'
                alt='' src={src} />
        </div>
    )
}
