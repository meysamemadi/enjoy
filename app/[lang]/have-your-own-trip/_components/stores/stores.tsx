import Title from '@/app/[lang]/components/title'
import React from 'react'
import { StoresCarousel } from './stores-carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getStoreList } from '@/actions/have-your-own-trip';
import { Locale } from '@/i18n-config';

export const Stores = async({ lang }: { lang: Locale}) => {

  const stores = await getStoreList(lang);

  return (
    <div>
      <Title title="Stores" />
      <div className="mt-6">
        <StoresCarousel stores={stores}/>
      </div>
      <div className='flex items-center justify-center'>

        <Button asChild className=' capitalize rounded-none bg-inherit  border border-[#594636] text-[#594636] '>
          <Link href="have-your-own-trip/all-stores">
            see more
          </Link>
        </Button>
      </div>
    </div>
  );
}
