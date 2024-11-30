"use client"
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type CarouselApi } from "@/components/ui/carousel"

export function PhotographerCarousel({ images }: { images: string[] }) {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])



  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-full relative md:px-4 mt-4"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 aspect-square max-h-[156px]">
            <Image alt="" height={156} width={156} src={image} className=" aspect-square" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" hidden md:flex absolute inset-y-0 -left-6 -right-6  items-center justify-between pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className=" border-none pointer-events-auto rounded-full"
          onClick={() => api?.scrollPrev()}
          disabled={current === 1}
        >
          <ChevronLeft className="h-6 w-6 " />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className=" border-none pointer-events-auto rounded-full"
          onClick={() => api?.scrollNext()}
          disabled={current === count}
        >
          <ChevronRight className="h-6 w-6 " />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      <div className=" flex gap-4 mt-4  justify-center md:hidden">

      <Button
          variant="outline"
          size="icon"
          className=" border-none pointer-events-auto rounded-full"
          onClick={() => api?.scrollPrev()}
          disabled={current === 1}
        >
          <ChevronLeft className="h-6 w-6 " />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className=" border-none pointer-events-auto rounded-full"
          onClick={() => api?.scrollNext()}
          disabled={current === count}
        >
          <ChevronRight className="h-6 w-6 " />
          <span className="sr-only">Next slide</span>
        </Button>

      </div>

    </Carousel>
  )
}
