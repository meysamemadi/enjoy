"use client"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Thumb } from "./thumb"


export const RestaurantCarousel = ({ images }: { images: string[] | [] }) => {

    const [mainApi, setMainApi] = useState<CarouselApi>()
    const [thumbsApi, setThumbsApi] = useState<CarouselApi>()

    const [open, setOpen] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState(0)


    const onSelect = useCallback(() => {
        if (!mainApi || !thumbsApi) {
            return
        }
        setSelectedIndex(mainApi.selectedScrollSnap())
        thumbsApi.scrollTo(mainApi.selectedScrollSnap())
    }, [mainApi, thumbsApi, setSelectedIndex])

    const onThumbClick = useCallback(
        (index: number) => {
            if (!mainApi || !thumbsApi) {
                return
            }
            mainApi.scrollTo(index)
        },
        [thumbsApi, mainApi]
    )


    useEffect(() => {
        if (!mainApi) {
            return
        }
        onSelect()

        mainApi.on('select', onSelect).on('reInit', onSelect)
    }, [mainApi, onSelect])

    if(images.length === 0) {
        return null;
    }

    return (
        <div className="md:bg-white w-full relative h-full max-h-[619px]">
            <Carousel dir="ltr" setApi={setMainApi} className="w-full h-full ">
                <CarouselContent>
                    {images.map((image: string) => (
                        <CarouselItem key={image}>
                            {/* Fixed: Added proper height and position styling to the container */}
                            <div className="p-1 relative w-full h-[400px] md:h-[619px]">
                                <Image
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                    alt="Restaurant image"
                                    src={image || "/placeholder.svg"}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="bg-white/40 left-4" variant="ghost" />
                <CarouselNext className="bg-white/40 right-4" variant="ghost" />
            </Carousel>

            <Carousel dir="ltr" setApi={setThumbsApi} className="w-full md:bg-[rgba(0,0,0,0.70)] p-4 md:absolute md:bottom-0">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem className="basis-auto" key={index}>
                            <Thumb
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={index}
                                src={image}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
