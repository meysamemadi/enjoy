import React from 'react'
import BreadCrumb from '../../components/breadcrumb'
import Title from '../../components/title'
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import img from "@/public/img/haveyorowntrip/Reservation of tour.png"
import { FormComponent } from './_components/form-component';
import { getReservationData } from '@/actions/have-your-own-trip';

async function Page({
  params: { lang },
  searchParams
}: {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const pages = [{ name: "Reservation of tour leader and interpreter", href: "", current: true }];
  const dic = await getDictionary(lang);


  const data = await getReservationData(lang,searchParams)


  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Title title="Reservation of tour leader and interpreter" />

      <div className='container'>
        <div className='bg-white px-4 py-6  xl:py-[40px] xl:px-[94px]'>

          <div className=' hidden md:block bg-[#F8F3EF] p-4 xl:px-6 py-3 opacity-80'>
            <p className='text-[#594636] leading-[200%] text-sm  font-medium '>
              The following form is for announcing your tour leader and interpreter and we will contact you after registering the form.
            </p>
          </div>

          <div className=' relative mt-4'>
            <Image className=' w-full h-auto object-cover max-h-[523px]' src={img} alt='Reservation of tour leader and interpreter' />
          </div>

          <FormComponent data={data} />

          
        </div>
      </div>

    </div>
  )
}

export default Page