import BreadCrumb from '@/app/[lang]/components/breadcrumb';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react'
import { ImageCarousel } from './_components/image-carousel';
import { Button } from '@/components/ui/button';
import { Color } from './_components/color';
import { Info } from './_components/info';
import { RiAngularjsFill, RiCheckboxFill, RiCheckboxIndeterminateFill, RiExchangeBoxFill } from 'react-icons/ri';
import { Attributes } from './_components/attributes';
import { PopularProducts } from './_components/popular-products';

const Page = async ({
    params: { lang , id },
    searchParams
  }: {
    params: { lang: Locale , id:number };
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
  
    const pages = [{ name: "Persian Store", href: "", current: true }];
    const dic = await getDictionary(lang);
    return (
      <div className="flex-1  bg-[#FAF5EF]">
        <BreadCrumb pages={pages} />
       

        <div className='md:bg-white container flex flex-col md:flex-row'>


           <h2 className=' md:hidden text-[32px] font-semibold capitalize text-[#594636]'>Original Iranian dining cup</h2>


            <div className='w-full md:w-2/3'>

                <ImageCarousel images={[
                    'https://picsum.photos/1024',
                    'https://picsum.photos/1024',
                    'https://picsum.photos/1024',
                    'https://picsum.photos/1024'
                ]} />

            </div>

            <div className='w-full md:w-1/3 bg-white p-2 md:p-6 flex flex-col'>

                <h2 className=' hidden md:block text-[32px] font-semibold capitalize text-[#594636]'>Original Iranian dining cup</h2>

                <div className=' hidden md:block'>
                <Color />
                </div>
               

                <div className='flex flex-col md:mt-6'>
                    <span className=' text-sm md:text-[25px] text-[#A98D69] line-through font-semibold'>$446.61</span>
                    <span className=' text-2xl md:text-[40px] font-semibold text-[#259F82]'>$169.43</span>
                </div>

                <Button className=' font-bold text-[22px] leading-[85.2%] mt-4 capitalize rounded-none border-none w-full text-white  bg-[#A98D69]'>
                  buy this
                </Button>

                <div className=' hidden md:block'>
                  <Info />
                </div>

            </div>

            <div className=' md:hidden'>
            <Color />
            <Info />
            </div>

        </div>

        <div className='mt-2 md:bg-white grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4'>

          <div className='flex flex-col items-center  md:p-6 gap-4'>

            <RiAngularjsFill className=' w-8 md:w-16 h-8 md:h-16 text-[rgba(169,141,105,1)]' />
            <p className='text-sm font-bold capitalize text-[rgba(169,141,105,1)]'>Warranty</p>

          </div>

          <div className='flex flex-col items-center  md:p-6 gap-4'>

            <RiCheckboxIndeterminateFill className=' w-8 md:w-16 h-8 md:h-16 text-[rgba(169,141,105,1)]' />
            <p className='text-sm font-bold capitalize text-[rgba(169,141,105,1)]'>Cancel order</p>

          </div>

          <div className='flex flex-col items-center  md:p-6 gap-4'>

            <RiExchangeBoxFill className=' w-8 md:w-16 h-8 md:h-16 text-[rgba(169,141,105,1)]' />
            <p className='text-sm font-bold capitalize text-[rgba(169,141,105,1)]'>Currency exchange</p>

          </div>

          <div className='flex flex-col items-center  md:p-6 gap-4'>

            <RiCheckboxFill className=' w-8 md:w-16 h-8 md:h-16 text-[rgba(169,141,105,1)]' />
            <p className='text-sm font-bold capitalize text-[rgba(169,141,105,1)] text-center'>Guarantee the authenticity of the goods</p>

          </div>

         

        </div>

        <Attributes />

        <PopularProducts />
        
        </div>
  )
}

export default Page