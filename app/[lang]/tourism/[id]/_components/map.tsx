import React from 'react';
import mapImg from "@/public/img/tourism/map.png"
import Image from "next/image";
import {RiCheckboxFill, RiMap2Line} from "react-icons/ri";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface TourProps {
    latitude: number;
    longitude: number;
}

export function Map({ latitude, longitude }: TourProps) {

    if(!latitude && !longitude) {
        return null
    }

    return (

        <div className='w-full md:w-2/3  mt-10 relative'>
            <Button asChild className={"absolute top-4 right-4 gap-2 bg-[#C13939] rounded-none text-sm font-medium capitalize"}>
                <Link title={""} href={`https://maps.google.com?q=${latitude},${longitude}`} >


                <RiMap2Line className={""} size={24} />
                view destinations

                </Link>
            </Button>
            <Image className={"w-full min-h-[190px]"} src={mapImg} alt={""} />
        </div>

    );
}

