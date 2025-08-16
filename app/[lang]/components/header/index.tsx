import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react'
import Header from './header';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export const HeaderContainer = async ({ lang , bgNone }: { lang: Locale , bgNone?:boolean }) => {
  const dictionary = await getDictionary(lang);

  return (
   
      <Header bgNone dictionary={dictionary["main-menu"]} />

  );
};
