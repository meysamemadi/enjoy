
import { useParams } from 'next/navigation'
import { HeaderContainer } from '../../components/header'
import { Locale } from '@/i18n-config'
import React from 'react'
import sky from "@/public/img/base/about_us.png"
import Image from 'next/image'

import style from "@/app/[lang]/styles/base.module.css"

export const HeaderWithBg = ({ children , lang }: { children : React.ReactNode , lang:Locale}) => {


  


  return (
    <div className={style.about_page_header}>
        <HeaderContainer bgNone lang={lang} />
        {children}
        
        
    </div>
  )
}
