import Image from 'next/image';
import React from 'react'

interface DocumentItemProps {
    id: number;
    name: string;
    image: string
}
export const DocumentItem = ({ id, name, image }: DocumentItemProps) => {
  return (
    <div>
      <div className="aspect-square relative">
        <Image fill className="aspect-square" alt={name} src={image} />
      </div>
      <p className="mt-3 md:mt-4 text-[10px] md:text-base font-semibold capitalize text-[#594636] text-center">
        {name}
      </p>
    </div>
  );
};
