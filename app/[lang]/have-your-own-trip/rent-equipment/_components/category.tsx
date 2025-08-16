import Image from 'next/image'
import React from 'react'

export const Category = ({
  title,
  image_one,
  image_two,
  image_three
}: {
  title: string
  image_one: string,
  image_two: string,
  image_three: string
}) => {
  return (
    <div className=' bg-white p-6 flex flex-col justify-center items-center'>
      <span className=' capitalize opacity-80 text-[12px] text-[#A07E62] '>{title}</span>
      <div className='flex h-[96px] items-center mt-6'>
        <Image className='h-[80px]  object-cover' alt='' src={image_one} width={112} height={80} />
        <Image className=' object-contain' alt='' src={image_two} width={96} height={96} />
        <Image className='h-[80px] object-contain' alt='' src={image_three} width={112} height={80} />
      </div>
    </div>
  )
}
