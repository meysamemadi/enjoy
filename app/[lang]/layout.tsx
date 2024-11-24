import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { montserrat } from "./font"
import { i18n } from "../../i18n-config";
import { ModalProvider } from '@/providers/modal-provider';
import { auth } from '@/auth';
import { SessionProvider } from "next-auth/react";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'Enjoy Persia',
  description: 'Enjoy Persia',
}



export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {

  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html
        className={`h-full ${montserrat.className}`}
        lang={params.lang}
        dir={params.lang === "fa" || params.lang === "ar" ? "rtl" : "ltr"}
      >
        <body className="h-full">
          <ModalProvider />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}



