import logo_img from '@/public/img/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className=' hidden lg:block self-center mt-[68px] mb-[40px] w-[79px] h-[48px] mx-auto'>
      <Link href={"/"}>
        <Image src={logo_img} alt='logo' className='w-full object-cover' />
      </Link>
    </div>
  )
}
