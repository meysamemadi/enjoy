import React from 'react'
import BreadCrumb from '../../components/breadcrumb'
import Title from '../../components/title'
import { cn } from '@/lib/utils';
import { Locale } from '@/i18n-config';
import { Messina_Serif } from '../../font';
import { Category } from './_components/category';
import re1 from "@/public/img/haveyorowntrip/re1.png"
import re2 from "@/public/img/haveyorowntrip/re2.png"
import re3 from "@/public/img/haveyorowntrip/re3.png"
import re4 from "@/public/img/haveyorowntrip/re4.png"
import re5 from "@/public/img/haveyorowntrip/re5.png"
import re6 from "@/public/img/haveyorowntrip/re6.png"
import re7 from "@/public/img/haveyorowntrip/re7.png"
import re8 from "@/public/img/haveyorowntrip/re8.png"
import re9 from "@/public/img/haveyorowntrip/re9.png"
import re10 from "@/public/img/haveyorowntrip/re10.png"
import re11 from "@/public/img/haveyorowntrip/re11.png"
import re12 from "@/public/img/haveyorowntrip/re12.png"
import re13 from "@/public/img/haveyorowntrip/re13.png"
import re14 from "@/public/img/haveyorowntrip/re14.png"
import re15 from "@/public/img/haveyorowntrip/re15.png"
import re16 from "@/public/img/haveyorowntrip/re16.png"
import re17 from "@/public/img/haveyorowntrip/re17.png"
import re18 from "@/public/img/haveyorowntrip/re18.png"
import re19 from "@/public/img/haveyorowntrip/re19.png"
import re20 from "@/public/img/haveyorowntrip/re20.png"
import re21 from "@/public/img/haveyorowntrip/re21.png"
import re22 from "@/public/img/haveyorowntrip/re22.png"
import re23 from "@/public/img/haveyorowntrip/re23.png"
import re24 from "@/public/img/haveyorowntrip/re24.png"
import re25 from "@/public/img/haveyorowntrip/re25.png"
import re26 from "@/public/img/haveyorowntrip/re26.png"
import re27 from "@/public/img/haveyorowntrip/re27.png"
import Image from 'next/image';
import { FormComponent } from './_components/form-component';
import { ImageComponent } from './_components/image-component';
import { Stores } from '../_components/stores/stores';



const Page = ({
    params: { lang },
}: {
    params: { lang: Locale };
}) => {


    const pages = [{ name: "Rent and purchase equipment", href: "", current: true }];


    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages} />
            <div className=' max-w-[728px] mx-auto flex flex-col items-center justify-center  text-center'>

                <h3 className={cn(' font-semibold text-[24px] md:text-[34px] lg:text-[46px] leading-[85.2%] text-[#594636]',
                    lang === 'en' && Messina_Serif.className

                )}>Rent and purchase equipment</h3>
                <p className=' mt-4 md:mt-6 text-sm  text-[#594636] font-medium leading-[200%]'>Enjoy Persia can buy or even rent various facilities for you in all cities in Iran. See
                    the features below and then fill out the form at the bottom of the page.</p>
            </div>

            <div className=' container grid lg:grid-cols-3 gap-4 md:gap-6 my-[32px] md:my-[62px]'>
                <Category
                    title='transportation'
                    image_one={re1.src}
                    image_two={re2.src}
                    image_three={re3.src}
                />
                <Category
                    title='camp equipment'
                    image_one={re4.src}
                    image_two={re5.src}
                    image_three={re6.src}
                />
                <Category
                    title='various equipment'
                    image_one={re7.src}
                    image_two={re8.src}
                    image_three={re9.src}
                />

                <Category
                    title='sleeping and accommodation equipment'
                    image_one={re10.src}
                    image_two={re11.src}
                    image_three={re12.src}
                />
                <Category
                    title='transportation equipment'
                    image_one={re13.src}
                    image_two={re14.src}
                    image_three={re15.src}
                />
                <Category
                    title='electronic tools'
                    image_one={re16.src}
                    image_two={re17.src}
                    image_three={re18.src}
                />

                <Category
                    title='diving equipment'
                    image_one={re19.src}
                    image_two={re20.src}
                    image_three={re21.src}
                />
                <Category
                    title='mountain-climbing equipment'
                    image_one={re22.src}
                    image_two={re23.src}
                    image_three={re24.src}
                />
                <Category
                    title='other'
                    image_one={re25.src}
                    image_two={re26.src}
                    image_three={re27.src}
                />
            </div>

            <Title title="Rent and purchase equipment" />

            <div className='container mb-[48px] md:mb-[62px]'>

                <div className='bg-white px-4 py-6  xl:py-[40px] xl:px-[94px]'>

                    <div className='flex flex-col max-w-[916px] mx-auto'>

                        <div className=' hidden md:block bg-[#F8F3EF] p-4 xl:px-6 py-3 opacity-80'>
                            <p className='text-[#594636] leading-[200%] text-sm  font-medium '>

                            The following form is for announcing your rent and purchase equipment and we will contact you after registering the form.

                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='order-2 md:order-1 w-full md:w-[40%]'>
                                <FormComponent />
                            </div>
                            <div className='order-1 md:order-2 w-full md:w-[60%]'>
                                <ImageComponent />
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <Stores lang={lang} />



        </div>
    )
}

export default Page