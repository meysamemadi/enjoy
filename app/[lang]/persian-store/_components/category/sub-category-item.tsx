import { cn } from '@/lib/utils'
import React from 'react'

interface SubCategoryItemProps {
  id: number;
  title: string;
}
export const SubCategoryItem = ({ id, title }: SubCategoryItemProps) => {
  return (
    <div className={
      cn(
        'bg-white p-2 lg:p-3 min-w-[91px]  md:min-w-[122px] text-center group   transition cursor-pointer',
        ' hover:bg-[#F1E7DA]',
        false && 'bg-[#A07E62]'

      )
    }>
      <p className={cn(
        'text-[#594636] group-hover:text-black text-sm font-semibold capitalize',
        false && 'text-white'
      )}>{title}</p>
    </div>
  )
}
