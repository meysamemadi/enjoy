import React from 'react'

export const AttributeItem = ({
    name,
    value
}: any) => {
  return (
    <div className='flex gap-2  md:gap-4 w-full '>
        <div className=' w-1/6 py-3 text-[10px] md:text-sm font-semibold leading-[140%] text-[#594636]'>{name}</div>
        <div className=' w-5/6 bg-white py-3 px-4 text-[12px] md:text-sm font-semibold leading-[200%] text-[#594636]'>{value}</div>
    </div>
  )
}
