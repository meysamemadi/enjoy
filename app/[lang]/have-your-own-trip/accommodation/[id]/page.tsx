import BreadCrumb from '@/app/[lang]/components/breadcrumb';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react'
import { AccommodationCarousel } from './_components/accommodation-carousel';
import { getAccommodation } from '@/actions/have-your-own-trip';
import { notFound } from 'next/navigation';
import { RiHome4Line, RiHotelBedLine, RiHotelLine, RiLeafLine, RiMapPinFill, RiTeamLine } from 'react-icons/ri';
import { Facilities } from './_components/facilities';
import Link from 'next/link';

const Page = async ({
    params: { lang, id },
}: {
    params: { lang: Locale, id: number };
}) => {

    const accommodation = await getAccommodation(lang, id)
    const dic = await getDictionary(lang);

    if (!accommodation) {
        notFound()
    }
    const pages = [{ name: accommodation.title, href: "", current: true }];

    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages} />
            <div className='container flex flex-col md:flex-row'>
                <div className='w-full md:w-2/3'>
                    <AccommodationCarousel images={accommodation.images} />
                </div>
                <div className='w-full md:w-1/3 md:bg-white p-2 md:p-6'>
                    <h2 className='text-[24px] md:text-[32px] text-[#594636] font-semibold capitalize'>{accommodation.title}</h2>
                    <p className='flex gap-2 items-center text-[#594636] mt-2'>
                        <RiMapPinFill className=' w-5 h-5 ' />
                        {accommodation.city}
                    </p>

                    <div className='flex flex-col md:hidden bg-white p-2 mt-6'>
                        <div className='mt-1 flex items-center gap-1'>

                            <p className='text-[#259F82] text-[40px] font-semibold'>{accommodation.price} </p>
                            <span className='text-[#594636] text-[10px] leading-[200%] capitalize font-semibold'>Price per night</span>
                        </div>

                        <div className='mt-1  items-center flex'>
                            <Link
                                className='flex items-center justify-center py-4 px-[48px] capitalize max-w-[328px] h-[72px] w-full bg-[#F07148] text-white'
                                href={`${id}/reservation`}>
                                Reserv this
                            </Link>
                        </div>
                    </div>

                    <div className='text-[#594636] mt-[20px]'>
                        <p className=' capitalize text-[#594636] text-sm font-bold'>Residence space</p>

                        <div className='flex items-center gap-6 md:gap-10 mt-1'>

                            <div className='flex flex-col '>
                                <span className=' capitalize text-[12px] text-[#A07E62] font-semibold leading-[150%]'>Area</span>
                                <div className='flex items-center gap-1 text-[12px] text-[#33281F] capitalize ont-semibold leading-[150%]'>
                                    <RiLeafLine className='w-5 h-5 text-[#A07E62]' />
                                    {accommodation.area}
                                </div>

                            </div>


                            <div className='flex flex-col '>
                                <span className=' capitalize text-[12px] text-[#A07E62] font-semibold leading-[150%]'>Area</span>
                                <div className='flex items-center gap-1 text-[12px] text-[#33281F] capitalize ont-semibold leading-[150%]'>
                                    <RiHotelLine className='w-5 h-5 text-[#A07E62]' />
                                    {accommodation.type}
                                </div>

                            </div>

                        </div>

                        <div className='flex items-center gap-4 mt-6'>
                            <RiHome4Line className='w-8 h-8 text-[#A07E62]' />
                            <div>
                                <h3 className=' text-[#A07E62] text-sm font-semibold capitalize leading-[150%]'>About the residence</h3>
                                <p className=' text-xs font-normal text-[#594636] capitalize mt-[6px]'>{accommodation.about}</p>
                            </div>
                        </div>


                        <div className='flex items-center gap-4 mt-6'>
                            <RiTeamLine className='w-8 h-8 text-[#A07E62]' />
                            <div>
                                <h3 className=' text-[#A07E62] text-sm font-semibold capitalize leading-[150%]'>Capacity</h3>
                                <p className=' text-xs font-normal text-[#594636] capitalize mt-[6px]'>{accommodation.capacity}</p>
                            </div>
                        </div>


                        <div className='flex items-center gap-4 mt-6'>
                            <RiHotelBedLine className='w-8 h-8 text-[#A07E62]' />
                            <div>
                                <h3 className=' text-[#A07E62] text-sm font-semibold capitalize leading-[150%]'>Sleep services</h3>
                                <p className=' text-xs font-normal text-[#594636] capitalize mt-[6px]'>{accommodation.sleep_services}</p>
                            </div>
                        </div>


                        <div className='flex items-center gap-2 mt-6'>

                            <div className=' px-2 py-[6px] bg-white md:bg-[#F6F6F6] text-[#594636] capitalize leading-[200%] font-semibold text-[10px]'>
                                {accommodation.rooms} rooms
                            </div>

                            <div className=' px-2 py-[6px] bg-white md:bg-[#F6F6F6] text-[#594636] capitalize leading-[200%] font-semibold text-[10px]'>
                                {accommodation.person} person
                            </div>

                            <div className=' px-2 py-[6px] bg-white md:bg-[#F6F6F6] text-[#594636] capitalize leading-[200%] font-semibold text-[10px]'>
                                grade:  {accommodation.grade}
                            </div>

                        </div>


                        <div className='flex items-center mt-6'>

                            <span className=' text-[#A07E62] text-[20px] font-medium capitalize leading-[200%]'>code: </span>
                            <span className='text-[20px] font-semibold capitalize leading-[200%] text-[#594636]'> {accommodation.code}</span>

                        </div>

                        <Facilities facilities={accommodation.facility} />

                        <div className='mt-6 hidden md:flex items-center gap-1'>

                            <p className='text-[#259F82] text-[40px] font-semibold'>{accommodation.price} </p>
                            <span className='text-[#594636] text-[10px] leading-[200%] capitalize font-semibold'>Price per night</span>
                        </div>

                        <div className='mt-6 hidden items-center md:flex'>
                            <Link
                                className='flex items-center justify-center py-4 px-[48px] capitalize max-w-[328px] h-[72px] w-full bg-[#F07148] text-white'
                                href={`${id}/reservation`}>
                                Reserv this
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page