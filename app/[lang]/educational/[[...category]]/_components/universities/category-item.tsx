'use client'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

interface CategoryItemProps {
  id: number;
  name: string;
  active?: boolean;
}

export const CategoryItem = ({ id, name, active }: CategoryItemProps) => {

  const router = useRouter();
  const params = useParams();

  return (
    <Button
      onClick={() => router.push(`/${params.lang}/educational/${id}`)}
      className={cn(
        " bg-white border text-[10px] md:text-sm text-[#33281F] font-semibold capitalize rounded-none w-full hover:bg-[#F071481A] hover:text-[#33281F] leading-[111%]",
        active &&
          "bg-[#F07148] text-white hover:bg-[#F07148]/80 hover:text-white/90 "
      )}
    >
      {name}
    </Button>
  );
};
