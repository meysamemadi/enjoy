import React from 'react'
import { AccommodationItem } from './accommodation-item'
import { getAccommodations } from '@/actions/have-your-own-trip';
import PaginationComponent from './pagination-component';
import { Locale } from '@/i18n-config';

export const AccommodationList = async ({ lang , searchParams } : { lang : Locale , searchParams: { [key: string]: string | string[] | undefined }}) => {

  const accommodations = await getAccommodations(lang , searchParams)


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
