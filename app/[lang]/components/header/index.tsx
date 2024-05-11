import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react'
import Header from './header';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export const HeaderContainer = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  return (
   
      <Header dictionary={dictionary["main-menu"]} />

  );
};
