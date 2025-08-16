import React from 'react'
import { VisaForm } from './visa-form'
import { RiBookReadLine, RiContactsBookUploadLine, RiFileUserLine, RiHeart2Line, RiUserSearchLine } from 'react-icons/ri'
import { ArrowRight } from './arrow-right'
import { ArrowDown } from './arrow-down'

export const VisaSection = () => {
    return (
        <div className='mt-5 '>
            <h2 className='mb-[6px] text-lg md:text-[32px] text-[#594636] font-semibold capitalize'>Getting Visa Steps</h2>
            <div className='bg-white px-6 md:px-16 2xl:px-[98px] py-8 hidden md:flex items-center justify-center  '>

                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <RiContactsBookUploadLine className='w-16 h-16 text-[rgba(160,126,98,1)]' />
                    <span className='text-sm w-[144px] font-bold text-[#594636]'>Sending information</span>
                </div>

                <ArrowRight />

                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <RiFileUserLine className='w-16 h-16 text-[rgba(160,126,98,1)]' />
                    <span className='text-sm w-[144px] font-bold text-[#594636]'>Passport & Visa information</span>
                </div>

                <ArrowRight />

                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <RiUserSearchLine className='w-16 h-16 text-[rgba(160,126,98,1)]' />
                    <span className='text-sm w-[144px] font-bold text-[#594636]'>Review by our expertst</span>
                </div>

                <ArrowRight />

                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <RiBookReadLine className='w-16 h-16 text-[rgba(160,126,98,1)]' />
                    <span className='text-sm w-[144px] font-bold text-[#594636]'>Getting Visa</span>
                </div>

                <ArrowRight />

                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <RiHeart2Line className='w-16 h-16 text-[rgba(160,126,98,1)]' />
                    <span className='text-sm w-[144px] font-bold text-[#594636]'>wishing good travel for you</span>
                </div>

            </div>

            <div className='bg-white px-4 py-10  flex md:hidden flex-col items-center  '>

                <div className='flex items-center'>

                    <div className=' w-[104px] flex flex-col items-center justify-center text-center gap-4'>
                        <RiContactsBookUploadLine className='w-10 h-10 text-[rgba(160,126,98,1)]' />
                        <span className='text-[10px] w-[92px] font-bold text-[#594636]'>Sending information</span>
                    </div>

                    <ArrowRight />

                    <div className=' w-[104px] flex flex-col items-center justify-center text-center gap-4'>
                        <RiFileUserLine className='w-10 h-10 text-[rgba(160,126,98,1)]' />
                        <span className='text-[10px] w-[92px] font-bold text-[#594636]'>Passport & Visa information</span>
                    </div>

                </div>


                <ArrowDown />

                <div className='flex items-center'>

                    <div className=' w-[104px] flex flex-col items-center justify-center text-center gap-4'>
                        <RiUserSearchLine className='w-10 h-10 text-[rgba(160,126,98,1)]' />
                        <span className='text-[10px] w-[92px] font-bold text-[#594636]'>Review by our experts</span>
                    </div>

                    <ArrowRight />

                    <div className=' w-[104px] flex flex-col items-center justify-center text-center gap-4'>
                        <RiBookReadLine className='w-10 h-10 text-[rgba(160,126,98,1)]' />
                        <span className='text-[10px] w-[92px] font-bold text-[#594636]'>Getting Visa</span>
                    </div>

                </div>


                <ArrowDown />


                <div className=' w-[104px] flex flex-col items-center justify-center text-center gap-4'>
                    <RiHeart2Line className='w-10 h-10 text-[rgba(160,126,98,1)]' />
                    <span className='text-[10px] w-[92px] font-bold text-[#594636]'>wishing good travel for you</span>
                </div>


            </div>
            <VisaForm />
        </div>
    )
}
