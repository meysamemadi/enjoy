import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react'
import BreadCrumb from '../../components/breadcrumb';
import CategoryCarousel from './_components/category-carousel';
// import { SubCategory } from '../_components/category/sub-category';
import { Title } from './_components/title';
// import { ProductItem } from '../_components/product-item';

const Page = async ({
    params: { lang },
    searchParams
}: {
    params: { lang: Locale };
    searchParams: { [key: string]: string | string[] | undefined }
}) => {

    const pages = [{ name: "Persian Store", href: "", current: true }];
    const dic = await getDictionary(lang);
    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages} />
            <CategoryCarousel />
            <div className=' container'>
                {/* <SubCategory /> */}
            </div>
            <Title />

            <div>
                <div className=' container mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6'>
                    {/* <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
                </div>
            </div>


        </div>
    )
}

export default Page