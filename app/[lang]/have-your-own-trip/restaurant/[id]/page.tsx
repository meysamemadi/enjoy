import { getRestaurant } from '@/actions/have-your-own-trip';
import BreadCrumb from '@/app/[lang]/components/breadcrumb';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { notFound } from 'next/navigation';
import React from 'react'
import { RestaurantCarousel } from './_components/restaurant-carousel';
import { RiMapPinFill } from 'react-icons/ri';
import { Facilities } from './_components/facilities';
import Link from 'next/link';

const Page = async ({
  params: { lang, id },
}: {
  params: { lang: Locale, id: number };
}) => {

  const restaurant = await getRestaurant(lang, id)
  const dic = await getDictionary(lang);

  if (!restaurant) {
    notFound()
  }
  const pages = [{ name: restaurant.title, href: "", current: true }];

  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />

      <div className='container flex flex-col md:flex-row'>
        <div className='w-full md:w-2/3'>
          <RestaurantCarousel images={restaurant.images} />
        </div>
        <div className='w-full md:w-1/3 md:bg-white p-2 md:p-6'>
          <h2 className='text-[24px] md:text-[32px] text-[#594636] font-semibold capitalize'>{restaurant.title}</h2>
          <p className='flex gap-2 items-center text-[#594636] mt-2'>
            <RiMapPinFill className=' w-5 h-5 ' />
            {restaurant.city}
          </p>

          <div className='flex items-center mt-6'>

            <span className=' text-[#A07E62] text-[20px] font-medium capitalize leading-[200%]'>code: </span>
            <span className='text-[20px] font-semibold capitalize leading-[200%] text-[#594636]'> {restaurant.code}</span>

          </div>

          <div className='flex items-center gap-2 mt-6'>

            {restaurant.food.map((item: string) => (
              <div key={item} className=' px-2 py-[6px] bg-white md:bg-[#F6F6F6] text-[#594636] capitalize leading-[200%] font-semibold text-[10px]'>
                {item}
              </div>
            ))}

          </div>

          <Facilities facilities={restaurant.facility} />

          <div className='mt-6 hidden  md:flex items-center justify-center'>
            <Link
              className='flex items-center justify-center py-4 px-[48px] capitalize  h-[72px] w-full bg-[#F07148] text-white'
              href={`${id}/reservation`}>
              Reserv this free
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Page