import Image from 'next/image'
import img from "@/public/img/haveyorowntrip/vipplus.png"

export const ImageComponent = () => {
  return (
    <div className=' min-h-[343px]  relative h-full md:mt-5 flex items-center justify-center'>
        <Image src={img} alt='' fill className=' object-cover object-center' />
        <div className=' relative text-white w-[190px] h-[136px] z-50 flex flex-col items-center'>
            <span className=' absolute top-0 right-0 text-[76px] font-black'>+</span>
            <span className='items-start text-[76px] pt-10 font-black'>VIP</span>
        </div>
    </div>
  )
}
