import React from 'react';
import {getSingleTour} from "@/actions/tourism-tour";
import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import {RestaurantCarousel} from "@/app/[lang]/have-your-own-trip/restaurant/[id]/_components/restaurant-carousel";
import {
    RiCheckboxFill,
    RiDownloadLine,
    RiHotelFill,
    RiMapPinFill,
    RiMedicineBottleFill,
    RiUserStarFill
} from "react-icons/ri";
import {Facilities} from "@/app/[lang]/have-your-own-trip/restaurant/[id]/_components/facilities";
import Link from "next/link";
import {getDictionary} from "@/get-dictionary";
import {notFound} from "next/navigation";
import {Locale} from "@/i18n-config";
import {Tour} from "@/types";
import {PiLeafFill} from "react-icons/pi";
import {PlaceCarousel} from "@/app/[lang]/tourism/[id]/_components/place-carousel";
import {Map} from "@/app/[lang]/tourism/[id]/_components/map";

interface PageProps {
    params: {
        id: number,
        lang: Locale
    }
}

async function Page({params}: PageProps) {

    const {id, lang} = params;
    const tourItem: Tour = await getSingleTour(lang, id)
    const dic = await getDictionary(lang);

    if (!tourItem) {
        notFound()
    }
    const pages = [{name: tourItem.title, href: "", current: true}];

    console.log(tourItem);
    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages}/>
            <div className='container flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-2/3'>
                    <RestaurantCarousel images={tourItem.images}/>

                    <div className={"hidden bg-white py-5 px-6 md:flex items-center justify-between"}>
                        <span className={"text-[#594636] text-lg font-normal leading-[200%] capitalize"}>download tour brochure</span>

                        <button className={"border flex items-center gap-6 border-[#594636] py-2 px-10"}>

                            <RiDownloadLine size={16} className={"text-[#594636]"}/>
                            <span className={"flex flex-col items-start capitalize"}>
                                <span className={"text-[#594636] font-bold text-xs"}>download now</span>
                                <span className={"text-[#594636] text-[8px] font-medium leading-[200%]"}>6.58 mg - 21 page</span>
                            </span>

                        </button>

                    </div>
                </div>
                <div className='w-full md:w-1/3 bg-white h-fit p-2 md:p-6'>
                    <h2 className='text-[24px] md:text-[32px] text-[#594636] font-semibold capitalize'>{tourItem.title}</h2>
                    <div className='flex gap-2 items-center text-[#594636] mt-2'>
                        <RiMapPinFill className=' w-5 h-5 '/>
                        <div>
                            from <span
                            className={"text-[#594636] text-[17px] font-bold"}>{tourItem.from_text}</span> to <span
                            className={"text-[#594636] text-[17px] font-bold"}>{tourItem.to_text}</span>
                        </div>

                    </div>


                    <div className='flex flex-wrap items-center gap-2 mt-6'>

                        {tourItem.facility.map((item: string) => (
                            <div key={item}
                                 className=' px-2 py-[6px] bg-[#594636] text-white capitalize leading-[200%] font-normal text-sm'>
                                {item}
                            </div>
                        ))}

                    </div>


                    <div className='grid grid-cols-2 gap-2 mt-4'>

                        <div className={"flex flex-col items-start gap-2"}>
                            <span className={"text-[#594636] text-sm font-bold"}>
                                Tour Operator:
                            </span>

                            <span className={"text-[#594636] text-sm"}>
                                 {tourItem.tour_operator}
                            </span>

                        </div>

                        <div className={"flex flex-col items-start gap-2"}>
                            <span className={"text-[#594636] text-sm font-bold"}>
                                Max group size:
                            </span>

                            <span className={"text-[#594636] text-sm"}>
                                 {tourItem.max_group_size}
                            </span>

                        </div>

                    </div>

                    <div className='grid grid-cols-2 gap-2 mt-4'>

                        <div className={"flex flex-col items-start gap-2"}>
                            <span className={"text-[#594636] text-sm font-bold"}>
                                Physical rating:
                            </span>

                            <span className={"text-[#594636] text-sm"}>
                                 {tourItem.physical_rating}
                            </span>

                        </div>

                        <div className={"flex flex-col items-start gap-2"}>
                            <span className={"text-[#594636] text-sm font-bold"}>
                                Age range:
                            </span>

                            <span className={"text-[#594636] text-sm"}>
                                 {tourItem.age_range}
                            </span>

                        </div>

                    </div>

                    <div className='grid grid-cols-2 gap-2 mt-4'>

                        <div className={"flex flex-col items-start gap-2"}>
                            <span className={"text-[#594636] text-sm font-bold"}>
                                Operated in:
                            </span>

                            <span className={"text-[#594636] text-sm"}>
                                 {tourItem.operated_in}
                            </span>

                        </div>

                        <div className={"flex flex-col items-start gap-2"}>
                            <span className={"text-[#594636] text-sm font-bold"}>
                                Tour id:
                            </span>

                            <span className={"text-[#594636] text-sm"}>
                                 {tourItem.id}
                            </span>

                        </div>

                    </div>

                    <div>
                        <span className={"text-[#594636] text-sm font-bold"}>
                                Private operated in:
                        </span>
                        <p className={"text-[#43B8A2] text-sm font-bold"}>
                            Private operated in:
                            If you want an interpreter in your own language, we will provide it for you.
                        </p>
                    </div>

                    <div className={"flex mt-6  items-center gap-2"}>
                        <span className={"text-[#594636] text-sm font-bold"}>From</span>
                        <span className={"text-[#259F82] text-[40px] font-semibold"}>
                            {tourItem.price}
                        </span>
                    </div>

                    {/*<Facilities facilities={tourItem.facility} />*/}

                    <div className='mt-6 flex items-center justify-center'>
                        <Link
                            className='flex text-[22px] font-bold items-center justify-center py-4 px-[48px] capitalize  h-[72px] w-full bg-[#C13939] text-white'
                            href={`${id}/reservation`}>
                            Reserv this
                        </Link>
                    </div>

                </div>
            </div>
            <div className='container   '>

                <PlaceCarousel items={tourItem.place} />

                <div className='w-full md:w-2/3 bg-white p-2 md:p-6 mt-10'>
                    <h2 className='text-[24px] md:text-[32px] text-[#594636] font-semibold capitalize'>Highlights</h2>
                    <div className='flex flex-col gap-2 bg-white p-4 md:p-10 w-full'>
                        {tourItem.highlights.map((item, index) => (
                            item && <div className={"flex items-center gap-2 text-[#594636] "} key={index}>
                                <RiCheckboxFill size={16}/>
                                {item}</div>
                        ))}
                    </div>
                </div>

                <Map latitude={tourItem.latitude} longitude={tourItem.longitude} />

                <div className='w-full md:w-2/3 bg-white p-2 md:p-6 mt-10'>
                    <h2 className='text-[24px] md:text-[32px] text-[#594636] font-semibold capitalize'>Travel your way</h2>
                    <div className='flex flex-col gap-8 md:gap-10 bg-white p-4 md:p-10 w-full'>

                        <div className={"text-[#594636] flex flex-col md:flex-row items-start md:items-center gap-4"}>
                            <RiHotelFill  size={40} />
                            <div className={"flex flex-col"}>
                                <h2 className={"text-[18px] text-[#594636] leading-[normal] font-bold"}>Personalize your trip*</h2>
                                <span className={"text-sm leading-[normal]"}>Make changes to the itinerary, accommodation, or transport method</span>
                            </div>
                        </div>

                        <div className={"text-[#594636] flex flex-col md:flex-row items-start md:items-center gap-4"}>
                            <RiMedicineBottleFill  size={40} />
                            <div className={"flex flex-col"}>
                                <h2 className={"text-[18px] text-[#594636] leading-[normal] font-bold"}>Increased safety during covid-19 *</h2>
                                <span className={"text-sm leading-[normal]"}>Spend the majority of time amongst your group to reduce exposure to others</span>
                            </div>
                        </div>

                        <div className={"text-[#594636] flex flex-col md:flex-row items-start md:items-center gap-4"}>
                            <RiUserStarFill  size={40} />
                            <div className={"flex flex-col"}>
                                <h2 className={"text-[18px] text-[#594636] leading-[normal] font-bold"}>Travel more exclusively</h2>
                                <span className={"text-sm leading-[normal]"}>Your tour guide can focus all their attention on your group.</span>
                            </div>
                        </div>

                        <div className={"text-[#594636] flex flex-col md:flex-row items-start md:items-center gap-4"}>
                            <PiLeafFill  size={40} />
                            <div className={"flex flex-col"}>
                                <h2 className={"text-[18px] text-[#594636] leading-[normal] font-bold"}>Travel for a special occasion*</h2>
                                <span className={"text-sm leading-[normal]"}>Celebrate an important event by only traveling with your friends or family</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;