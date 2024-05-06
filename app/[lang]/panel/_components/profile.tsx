'use client'
import Image from 'next/image'
import React from 'react'
import user from "@/public/img/user.png"
import { useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { brand } from '../../font'
import { Button } from '@/components/ui/button'
import { SignOut } from './sign-out'

export const Profile = () => {

    const { data:session } = useSession();

    console.log(session?.user)

  return (
    <div className="mt-[48px] lg:mt-6 mb-[48px] lg:mb-[80px] bg-white p-6">
      <div className=" hidden lg:flex flex-nowrap">
        <div className="flex-1 flex flex-nowrap gap-6">
          <div className=" max-h-[164px] max-w-[164px] aspect-square">
            <Image alt="" src={user} />
          </div>
          <div className="flex flex-col">
            <h2
              className={cn(
                brand.className,
                "text-[34px] font-normal text-[#594636] leading-[normal] "
              )}
            >
              {session?.user?.fullname}
            </h2>
            <p className="text-[11px] text-[#594636] font-medium">
              registry date : 7 . 12 . 2022
            </p>
            <p className="text-[#594636] font-bold text-[11px] mt-4">
              Phone Number : {session?.user.mobile}
            </p>
            <div className="mt-4 flex gap-4">
              <Button className=" capitalize py-4 px-[48px] rounded-none border border-[#594636] bg-white text-[#594636] hover:border-[#BFBFBF] hover:text-[#BFBFBF] hover:bg-white">
                upload photo
              </Button>

              <Button className=" capitalize py-4 px-[48px] rounded-none border border-[#594636] bg-white text-[#594636] hover:border-[#BFBFBF] hover:text-[#BFBFBF] hover:bg-white">
                edit profile
              </Button>

              <SignOut />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
