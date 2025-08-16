import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import BreadCrumb from '../../components/breadcrumb';
import Title from '../../components/title';
import { ProductList } from './_components/product-list';
import { CartForm } from './_components/cart-form';
import Image from 'next/image';
import { OrderSummery } from './_components/order-summery';

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

                           <OrderSummery />

                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default Page