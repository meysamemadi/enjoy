import React from 'react'
import BreadCrumb from '../../components/breadcrumb';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Title from '../../components/title';
import { Filters } from './_components/filters';
import { getStores } from '@/actions/have-your-own-trip';
import { StoreItem } from '../_components/stores/store-item';

const Page = async ({ params: { lang }, searchParams }: { params: { lang: Locale }, searchParams: { [key: string]: string | string[] | undefined } }) => {

    const pages = [{ name: "Stores", href: "", current: true }];
    const dic = await getDictionary(lang);

    const stores = await getStores(lang,searchParams);

    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages} />
            <Title title="Stores" />
            <Filters lang={lang} />

            <div className='grid md:grid-cols-3 gap-4 md:gap-6'>

            {stores.items.map((store:any)=> (
                <StoreItem key={store.id} {...store} />
            ))}
            </div>

        </div>
    )
}

export default Page