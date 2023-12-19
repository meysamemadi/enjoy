import Title from "../../components/title";
import { Category } from "./special-tours/category";
import { Tours } from "./special-tours/tours";

export const SpecialTours = () => {
    return ( 
        <div className=" mt-[48px] md:mt-[80px]">
            <Title title="special tours"  />
            <Category />

            <Tours />

        </div>
     );
}
 
