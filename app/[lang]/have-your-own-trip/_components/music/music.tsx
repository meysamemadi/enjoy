import { Messina_Serif } from '@/app/[lang]/font';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import musicBg from '@/public/img/haveyorowntrip/music.png'
import { Dongle } from 'next/font/google';
import Image from 'next/image';
import { RiPlayFill } from 'react-icons/ri';
import { Downloads } from './downloads';

export const Music = () => {
  return (
    <>
      <div className="container relative aspect-square md:aspect-[4.32/1] after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(90deg,_rgba(0,_0,_0,_0.90)_0%,_rgba(0,_0,_0,_0.00)_97.92%)]">
        <Image
          fill
          src={musicBg}
          className=" w-full h-full object-cover z-[0]"
          alt=""
        />
        <div className=" absolute inset-0 w-full h-full z-10 p-6 md:p-8 flex items-end md:items-center justify-between ">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <RiPlayFill className="w-[88px] h-[88px] text-white" />
            <div className="flex flex-col">
              <p
                className={cn(
                  Messina_Serif.className,
                  "text-white font-semibold capitalize text-[40px] md:text-[72px]"
                )}
              >
                <span className="text-[24px] md:text-[32px] w-full block">
                  Famous
                </span>
                Iranian songs
              </p>
              <p className="text-[15px] text-white font-medium capitalize leading-[84%]">
                +20 pop & rock & more
              </p>
            </div>
          </div>

          <Button className=" hidden md:block bg-inherit border border-white rounded-none text-base font-bold capitalize leading-[85.2%]">
            download all songs .mp3
          </Button>
        </div>
      </div>
      <Downloads />
    </>
  );
}
