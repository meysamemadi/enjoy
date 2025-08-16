import Image from 'next/image'
import img from "@/public/img/store/major_shopping2.png"

export const ImageComponent = () => {
  return (
    <div className=' min-h-[426px]  relative h-full md:mt-5 flex items-center justify-center'>
        <Image src={img} alt='' fill className=' object-cover object-center' />
        <div className='flex flex-col absolute w-full bottom-0 bg-[rgba(6,6,6,0.6)] p-4 md:p-8'>
            <h2 className='text-white text-[24px] md:text-[32px] font-semibold'>Major shoping</h2>
            <p className='text-white text-sm font-medium'>If you desire to buy more products with lower prices or if you have a store in your country and wish to be our sales representative, it is enough to send us a message.</p>

        </div>
    </div>
  )
}
