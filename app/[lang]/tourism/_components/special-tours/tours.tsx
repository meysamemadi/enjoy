import { ToursCarousel } from "./tours-carousel"
import {Tour} from "@/types";

interface TourProps {
    specialTours: Tour[]
}
export const Tours = ({ specialTours }: TourProps) => {
    return (
        <div>
            <ToursCarousel specialTours={specialTours} />
        </div>
    )
}
