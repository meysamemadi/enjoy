import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// import { ProductItem } from "../../../_components/product-item"

export const ProductCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-4 md:mt-6"
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
            {/* <ProductItem /> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
