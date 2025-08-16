"use client"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

interface CategoryItemProps {
  id: number;
  name: string;
  selectedValue: number | null; // Accept selected value as prop
  setSelectedValue: React.Dispatch<React.SetStateAction<number | null>>; // Accept state setter as prop

}

export const CategoryItem = ({ id, name, selectedValue, setSelectedValue }: CategoryItemProps) => {


  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    // On mount, check if 'accommodation-city' exists in the URL and set the state
    const initialCategory = searchParams.get('accommodation-category');
    if (initialCategory && selectedValue === null) {
      setSelectedValue(parseInt(initialCategory, 10)); // Set initial state based on URL parameter
    }
  }, [searchParams, setSelectedValue]);

  const handleClick = (id: any) => {


    const isAlreadySelected = selectedValue === id; // Check if the same button is clicked twice
    const newValue = isAlreadySelected ? null : id; // Toggle selected value
    setSelectedValue(newValue);

 

    const params = new URLSearchParams(searchParams.toString()); // Clone current search params

    if (newValue) {
      params.set('accommodation-category', newValue); // Set the new value if it's selected
    } else {
      params.delete('accommodation-category'); // Remove the search param if the same button is clicked again
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false }); // Avoid scrolling
  }

  return (
    <Button
      onClick={() => handleClick(id)}

      className={cn(
        " bg-white text-sm text-[#33281F] font-semibold capitalize rounded-none hover:bg-[#F071481A] hover:text-[#33281F] py-2 md:py-3 px-6 md:px-[57px]  ",
        selectedValue === id && "bg-[#F07148] text-white hover:bg-[#F07148]/80 hover:text-white/90 "
      )}
    >
      {name}
    </Button>
  );


}
