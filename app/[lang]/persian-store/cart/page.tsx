import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import BreadCrumb from '../../components/breadcrumb';
import Title from '../../components/title';
import { ProductList } from './_components/product-list';
import { CartForm } from './_components/cart-form';
import Image from 'next/image';
import cart1 from "@/public/image/cart1.png"

const Page = async ({
    params: { lang, id },
    searchParams
}: {
    params: { lang: Locale, id: number };
    searchParams: { [key: string]: string | string[] | undefined }
}) => {

    const pages = [{ name: "Cart", href: "", current: true }];
    const dic = await getDictionary(lang);
    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages} />
            <Title title='cart' />
            <ProductList />


            <div className='container mx-auto'>
                <div className='  bg-white mt-9 p-4 lg:p-8'>

                    <div className=' max-w-[916px] mx-auto'>

                        <div className=' bg-[#F8F3EF] p-4 lg:p-6'>
                            <p className=' text-xs font-bold text-[#594636] leading-[150%]'>To complete your purchase process, just fill out the form below and we will contact you soon.</p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-6 w-full'>

                            <div className=' w-full md:w-1/3 order-2 md:order-1'>
                                <CartForm />
                            </div>

                            <div className='w-full md:w-2/3 order-1 md:order-2 flex flex-col gap-2'>

                                <div className='flex  gap-6 md:gap-0  items-center justify-between px-4 lg:px-8 py-6 bg-white'>
                                    <div className='flex items-center'>
                                        <div className='flex flex-1 items-center'>
                                            <Image src={cart1} width={64} height={64} alt='' />
                                            <div className='flex flex-col ml-2 lg:ml-4'>
                                                <h3 className=' text-base lg:text-2xl capitalize font-semibold text-[#A07E62]'>Original Iranian dining cup</h3>
                                                <p className=' text-sm lg:text-lg font-semibold text-[#259F82]'>$169.43</p>
                                            </div>
                                        </div>
                                    </div>

                                    <span className=' font-medium text-[#594636]'>2</span>
                                </div>


                                <div>
                                    <span className=' capitalize text-[#A07E62] text-[13px] font-semibold'>total</span>
                                    <div className='flex flex-col'>
                                        <span className=' font-semibold text-[24px] md:text-[32px] text-[#259F82]'>$952.63</span>
                                        <p className='text-sm font-medium leading-[150%] text-[#594636]'>Note: We will only charge you 15% of the total order amount.</p>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default Page