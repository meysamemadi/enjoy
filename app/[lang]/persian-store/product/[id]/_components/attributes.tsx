import Title from '@/app/[lang]/components/title'
import React from 'react'
import { AttributeItem } from './attribute-item'

interface AttributesProps {
  meta: {
    id: number
    name: string;
    value: string;
    type: boolean
  }[]
}

export const Attributes = ({ meta }: AttributesProps) => {
  return (
    <div className=' mt-12 md:mt-[80px]'>
        <Title title='Description' />
        <div className='flex flex-col container mt-4 gap-2'>
          {meta.map((item) => (
              <AttributeItem key={item.id} name={item.name} value={item.value} />
          ))}
        
        </div>
    </div>
  )
}
