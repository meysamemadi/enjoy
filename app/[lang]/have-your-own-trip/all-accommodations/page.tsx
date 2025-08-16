import { Locale } from '@/i18n-config'
import React from 'react'
import { CityIndex } from './_components/city'
import { getDictionary } from '@/get-dictionary';
import BreadCrumb from '../../components/breadcrumb';
import { EcoLodge } from './_components/eco-lodge';
import { LiveWithIranian } from './_components/live-with-iranian';
import { Hotels } from './_components/hotels';
import { Economics } from './_components/economics';
import { Luxury } from './_components/luxury';

const AllAccommodations = async({ params: { lang } , searchParams } : { params : {lang : Locale} , searchParams: { [key: string]: string | string[] | undefined }}) => {

  const pages = [{ name: "Have Your Own Trip", href: "", current: true }];
  const dic = await getDictionary(lang);

  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <CityIndex lang={lang} searchParams={searchParams} />
      <EcoLodge searchParams={searchParams} lang={lang} />
      <LiveWithIranian searchParams={searchParams} lang={lang} />
      <Hotels searchParams={searchParams} lang={lang} />
      <Luxury searchParams={searchParams} lang={lang} />
      <Economics searchParams={searchParams} lang={lang} />
    </div>
  )
}

export default AllAccommodations