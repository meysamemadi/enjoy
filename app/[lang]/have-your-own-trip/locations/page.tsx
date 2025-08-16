import React from 'react'
import BreadCrumb from '../../components/breadcrumb';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { CityIndex } from './_components/city';
import Title from '../../components/title';
import { LocationContainer } from './_components/location-container';

const LocationPage = async({ params: { lang } , searchParams } : { params : {lang : Locale} , searchParams: { [key: string]: string | string[] | undefined }}) => {
    const pages = [{ name: "Have Your Own Trip", href: "", current: true }];
    const dic = await getDictionary(lang);
  
    return (
      <div className="flex-1  bg-[#FAF5EF]">
        <BreadCrumb pages={pages} />
        <Title title="Locations"  />
        <CityIndex lang={lang} searchParams={searchParams} />
        <LocationContainer lang={lang} searchParams={searchParams} />
      </div>
    )
}

export default LocationPage