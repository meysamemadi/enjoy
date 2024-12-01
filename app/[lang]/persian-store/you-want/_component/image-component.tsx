import Image from 'next/image'
import img from "@/public/img/store/you_want.png"

export const ImageComponent = () => {
  return (
    <div className=' min-h-[426px]  relative h-full md:mt-5 flex items-center justify-center'>
        <Image src={img} alt='' fill className=' object-cover object-center' />
        <div className='flex flex-col absolute w-full bottom-0 bg-[rgba(6,6,6,0.6)] p-4 md:p-8'>
            <h2 className='text-white text-[24px] md:text-[32px] font-semibold'>Say what you want</h2>
            <p className='text-white text-sm font-medium'>If you intend to buy a special product or order making a product
            according to your taste, it is enough to send us a message.</p>

        </div>
    </div>
  )
}
