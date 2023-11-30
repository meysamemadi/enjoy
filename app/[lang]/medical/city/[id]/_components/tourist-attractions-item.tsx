import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import attr from "@/public/img/attraction1.png"
import Image from "next/image";
const TouristAttractionsItem = () => {
    return (
      <div className="flex flex-col space-y-4 md:space-y-6">
        <div className=" h-[260px] md:h-[266px]">
          <Image className="w-full h-full object-cover" src={attr} alt="test" />
        </div>
        <p className={cn(Messina_Serif.className, "font-bold  text-[#594636] ")}>
          Do not miss the minarets of Isfahan!
        </p>
      </div>
    );
}
 
export default TouristAttractionsItem;