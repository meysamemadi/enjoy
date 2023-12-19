import Title from "@/app/[lang]/components/title";
import { Category } from "./category";
import { Tours } from "./tours";

export const OneDayTours = () => {
  return (
    <div className="">
      <Title title="One day tours" />
       <Category />

      <Tours /> 
    </div>
  );
}
