import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react'
import BreadCrumb from '../components/breadcrumb';
import { Header } from './_components/Header';
import bgHeader from '@/public/img/store/bg.svg'
import Image from 'next/image';
import { Category } from './_components/category/category';
import { ProductList } from './_components/product-list';
import { LuxuryProducts } from './_components/luxury-products';
import { SpecialProducts } from './_components/special-products';
import { WhatsHot } from './_components/whats-hot';
import { getParentsCategories } from '@/actions/persian-store';

const Page = async ({
  params: { lang },
  searchParams
}: {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const pages = [{ name: "Persian Store", href: "", current: true }];
  const dic = await getDictionary(lang);

  const categories = await getParentsCategories(lang);


  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />

      <div className='relative container overflow-hidden  min-h-screen flex flex-col'>
        <Header />
        <Category categories={categories} lang={lang} />
        <div className="absolute flex items-center -right-[250px] bottom-0  md:inset-0 justify-start">
          <Image
            src={bgHeader}
            alt="Background decoration"
            width={400}
            height={400}
            className="object-cover md:mt-[250px] "
          />
        </div>
      </div>

      <ProductList lang={lang} />
      <LuxuryProducts lang={lang}/>
      <SpecialProducts  lang={lang}/>

      <WhatsHot />


    </div>
  )
}

export default Page