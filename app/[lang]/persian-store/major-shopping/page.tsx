import BreadCrumb from '@/app/[lang]/components/breadcrumb';
import Title from '@/app/[lang]/components/title';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react'
import { MyForm } from './_component/form';
import { ImageComponent } from './_component/image-component';
import { notFound } from 'next/navigation';
import { getAccommodation } from '@/actions/have-your-own-trip';

const Page = async ({
    params: { lang , id },
    searchParams
  }: {
    params: { lang: Locale , id: number };
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
  
    const pages = [{ name: "Major shopping", href: "", current: true }];
    const dic = await getDictionary(lang);




  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Title title="Major shopping" />
      <div className='container'>

        <div className='bg-white px-4 py-6  xl:py-[40px] xl:px-[94px]'>

          <div className='flex flex-col'>

              <div className=' hidden md:block bg-[#F8F3EF] p-4 xl:px-6 py-3 opacity-80'>
               <p className='text-[#594636] leading-[200%] text-sm  font-medium capitalize '>
                
               the following form is for announcing your major shopping and we will contact you after registering the form.
                </p>
              </div>
             <div className='flex flex-col md:flex-row gap-4'>
              <div className='order-2 md:order-1 w-full md:w-[40%]'>
              <MyForm />
              </div>
              <div className='order-1 md:order-2 w-full md:w-[60%]'>
               <ImageComponent />
              </div>
              
             </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Page