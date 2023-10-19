'use client'
import { Category, University } from '@/types'
import React from 'react'
import { Messina_Serif } from '../../font'
import { cn } from '@/lib/utils';
import CategorySlider from './CategorySlider';
import UniversitiesGrid from './UniversitiesGrid';

interface UnivercitiesProps {
  universities : University[];
  categories: Category[];
  dictionary: {
    universities: string;
  };
}

const Univercities: React.FC<UnivercitiesProps> = ({
  dictionary,
  universities,
  categories,
}) => {
  return (
    <div className=" container">
      <div className="py-2">
        <div className=" py-2 border-b border-[#A07E624D]/30">
          <span
            className={cn(
              "text-lg md:text-[32px] font-semibold text-[#A07E62]"
            )}
          >
            {dictionary.universities}
          </span>
        </div>
        <div className="">
          <CategorySlider categories={categories} />
          <UniversitiesGrid universities={universities} />
        </div>
      </div>
    </div>
  );
};

export default Univercities