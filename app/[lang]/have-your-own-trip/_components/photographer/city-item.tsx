import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react'

interface CityItemProps {
  id: number;
  name: string;
  active?: boolean;
  handleCitySelect: (id:number) => void;
  selectedCityId: number | null
}

export const CityItem = ({ id, name, active, selectedCityId , handleCitySelect }: CityItemProps) => {
  return (
    <Button

      onClick={() => handleCitySelect(id)}

      className={cn(
        " bg-white text-sm text-[#33281F] font-semibold capitalize rounded-none hover:bg-[#F071481A] hover:text-[#33281F] py-2 md:py-3 px-6 md:px-[57px]  ",
        selectedCityId === id &&
        "bg-[#F07148] text-white hover:bg-[#F07148]/80 hover:text-white/90 "
      )}
    >
      {name}
    </Button>
  );
};
