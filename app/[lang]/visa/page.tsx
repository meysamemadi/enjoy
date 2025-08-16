import React from 'react'
import BreadCrumb from '../components/breadcrumb'
import { Header } from './_components/Header'
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { FormContainer } from './_components/form-container';

const VisaPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const pages = [{ name: "Tourism Tour", href: "", current: true }];
    const dic = await getDictionary(lang);
    return (
        <div className="flex-1  bg-[#FAF5EF]">
            <BreadCrumb pages={pages} />
            <Header />
            <FormContainer />
        </div>
    )
}

export default VisaPage