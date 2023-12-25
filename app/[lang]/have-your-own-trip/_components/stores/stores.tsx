import Title from '@/app/[lang]/components/title'
import React from 'react'
import { StoresCarousel } from './stores-carousel';

export const Stores = () => {
  return (
    <div>
      <Title title="Stores" />
      <div className="mt-6">
        <StoresCarousel />
      </div>
    </div>
  );
}
