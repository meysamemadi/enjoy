import Title from '@/app/[lang]/components/title'
import React from 'react'
import { Player } from './player'

export const TravelCheap = () => {
  return (
    <>
        <Title title='travel cheap' />
        <div className='container mb-[40px] mt-4 md:mt-[40px]'>
            <Player />
        </div>
        
    </>
  )
}
