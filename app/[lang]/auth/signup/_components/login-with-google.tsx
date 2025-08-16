import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import google from "@/public/img/auth/google.svg"

const LoginWithGoogle = () => {
  return (
    <Button className=" text-[#594636] hover:text-white w-full bg-inherit border border-[rgba(160,126,98,0.50)] rounded-none">
      <Image className='mr-2' src={google} alt="google" />
      with google
    </Button>
  );
}

export default LoginWithGoogle