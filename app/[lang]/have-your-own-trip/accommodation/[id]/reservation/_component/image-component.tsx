import Image from 'next/image'
import img from "@/public/img/haveyorowntrip/vipplus.png"

export const ImageComponent = ({ image }: { image : string}) => {
  return (
    <div className=' min-h-[343px]  relative h-full md:mt-5 flex items-center justify-center'>
        <Image src={image} alt='' fill className=' object-cover object-center' />
    </div>
  )
}
