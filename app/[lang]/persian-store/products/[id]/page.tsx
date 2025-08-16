import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react'
import BreadCrumb from '../../../components/breadcrumb';
import CategoryCarousel from './_components/category-carousel';
// import { SubCategory } from '../_components/category/sub-category';
import { Title } from './_components/title';
import { getParentsCategories, getProductsByCategory } from '@/actions/persian-store';
import { CategoryComponent } from './_components/category-component';
import { ProductItem } from '../../_components/product-item';
// import { ProductItem } from '../_components/product-item';

const Page = async ({
    params: { lang, id },
    searchParams
}: {
    params: { lang: Locale, id: number };
    searchParams: { [key: string]: string | string[] | undefined }
}) => {

    const pages = [{ name: "Persian Store", href: "", current: true }];
    const dic = await getDictionary(lang);

    const categories = await getParentsCategories(lang);
    const products = await getProductsByCategory(lang, id)


    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages} />

            <CategoryComponent categories={categories} />



            <Title count={products?.pagination.totalCount} />

            <div>
                <div className=' container mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6'>

                    {products.items.map((product:any) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                    
                </div>
            </div>


        </div>
    )
}

export default Page