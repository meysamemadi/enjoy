import { ToursCarousel } from "./tours-carousel"
import {Tour} from "@/types";

export const Tours = ({oneDayTours}:{oneDayTours:Tour[]}) => {
  return (
    <div>
        <ToursCarousel oneDayTours={oneDayTours} />
    </div>
  )
}
