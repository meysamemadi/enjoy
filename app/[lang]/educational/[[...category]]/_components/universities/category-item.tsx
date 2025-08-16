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

  const category = params?.category;





  return (
    <Button
      onClick={() => router.push(`/${params.lang}/educational/${id}`)}
      className={cn(
        " bg-white border text-[10px]  line-clamp-1 md:text-sm text-[#33281F] font-semibold capitalize rounded-none w-full hover:bg-[#497D59]/80  hover:text-white leading-[111%]",
        //@ts-ignore
        category && (category[0] == id) &&
          "bg-[#497D59] text-white hover:bg-[#497D59]/80 hover:text-white/90 "
      )}
    >
      {name}
    </Button>
  );
};
