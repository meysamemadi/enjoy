import Title from '@/app/[lang]/components/title'
import { Locale } from '@/i18n-config'
import React from 'react'
import { AccommodationList } from './accommodation-list'

export const LiveWithIranian = async ({ lang , searchParams } : { lang : Locale , searchParams: { [key: string]: string | string[] | undefined }}) => {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
       <Title title="Live with an Iranian family"  />

       <AccommodationList lang={lang} searchParams={searchParams} />

    </div>
  )
}
