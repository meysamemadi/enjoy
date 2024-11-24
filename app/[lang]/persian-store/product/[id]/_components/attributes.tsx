import Title from '@/app/[lang]/components/title'
import React from 'react'
import { AttributeItem } from './attribute-item'

export const Attributes = () => {
  return (
    <div className=' mt-12 md:mt-[80px]'>
        <Title title='Description' />
        <div className='flex flex-col container mt-4 gap-2'>
            <AttributeItem name="Producer Name" value="Iran National" />
            <AttributeItem name="Producer Name" value="Iran National" />
            <AttributeItem name="Producer Name" value="Iran National" />
            <AttributeItem name="Producer Name" value="Iran National" />
        </div>
    </div>
  )
}
