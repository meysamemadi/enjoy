"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import t4 from "@/public/image/t4.png";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "@/app/[lang]/font";
import { Skeleton } from "@/components/ui/skeleton";

export const Player = () => {
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="aspect-[1.7/1] w-full">
          <Skeleton className="w-full h-full"  />
      </div>
    );
  }


  return (
    <div className=" aspect-[1.7/1] w-full">
      <ReactPlayer
        playing={playing}
        light={
          <img
            className="w-full h-full object-cover"
            src={t4.src}
            alt="Thumbnail"
          />
        }
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        width="100%"
        height="100%"
        controls={true}
        onClickPreview={(
          props: ReactPlayerProps | Readonly<ReactPlayerProps>
        ) => {
          setPlaying(true);
        }}
      />
      <p
        className={cn(
          "text-[15px] md:text-2xl leading-[normal] font-semibold text-[#594636] mt-4 md:mt-6",
          Messina_Serif.className
        )}
      >
        Educational clip of using Snapp and Maxim for inner-city and extra-city
        trips
      </p>
    </div>
  );
};
