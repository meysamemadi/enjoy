import React from 'react'
import { getAccommodations } from '@/actions/have-your-own-trip';
import PaginationComponent from './pagination-component';
import { AccommodationItem } from '../accommodation-item';

export const AccommodationList = ({ accommodations }: { accommodations: any }) => {

  return (
    <div className=" container">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {accommodations.items.map((accommodation: any) => <AccommodationItem
          key={accommodation.id}
          {...accommodation}
        />)}

      </div>

      <div className='flex justify-center'>

        <PaginationComponent totalPages={accommodations.pagination.pageCount} />
      </div>
    </div>
  );
}
