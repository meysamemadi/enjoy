import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react'
import BreadCrumb from '../../components/breadcrumb';
import { Header } from '../_components/Header';
import Title from '../../components/title';
import { VipForm } from './_component/form';
import { ImageComponent } from './_component/image-component';

const VipPlusPage = async ({
  params: { lang },
  searchParams
}: {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const pages = [{ name: "vip plus", href: "", current: true }];
  const dic = await getDictionary(lang);

  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Title title="Vip Plus" />
      <div className='container'>

        <div className='bg-white px-4 py-6  xl:py-[40px] xl:px-[94px]'>

          <div className='flex flex-col'>

              <div className=' hidden md:block bg-[#F8F3EF] p-4 xl:px-6 py-3 opacity-80'>
               <p className='text-[#594636] leading-[200%] text-sm  font-medium '>
                
                The following form is for announcing your VIP+ and we will contact you after registering the form.
                </p>
              </div>
             <div className='flex flex-col md:flex-row gap-4'>
              <div className='order-2 md:order-1 w-full md:w-[40%]'>
              <VipForm />
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

export default VipPlusPage