"use client"
import { cn } from '@/lib/utils'
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

interface SubCategoryItemProps {
  id: number;
  title: string;
}
export const SubCategoryItem = ({ id, title }: SubCategoryItemProps) => {

  const router = useRouter();
  const { lang , id:CategoryID } = useParams();
  return (
    <div 
    onClick={() => router.push(`/${lang}/persian-store/products/${id}`)}
    className={
      cn(
        'bg-white p-2 lg:p-3 min-w-[91px]  md:min-w-[122px] text-center group   transition cursor-pointer',
        ' hover:bg-[#F1E7DA]',
        Number(CategoryID) === id && 'bg-[#A07E62] '

      )
    }>
      <p className={cn(
        'text-[#594636] group-hover:text-black text-sm font-semibold capitalize',
        Number(CategoryID) === id && 'text-white'
      )}>{title}</p>
    </div>
  )
}
