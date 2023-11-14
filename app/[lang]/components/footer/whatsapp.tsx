import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import { IoLogoWhatsapp } from "react-icons/io";
const WhatsApp = ({ dictionary}: {dictionary: { 
  Need_more_information: string,
  Connect_with_WhatsApp : string

 }}) => {
  return (
    <div className="container my-6 md:my-8 ">
      <div className="bg-white py-3 flex flex-wrap gap-2 items-center justify-evenly">
        <h3
          className={cn(
            Messina_Serif.className,
            "text-[19px] font-semibold text-[#594636]"
          )}
        >
          {dictionary.Need_more_information}
        </h3>
        <Button className="bg-[#31CA68] rounded-none text-base md:text-lg font-bold">
          <IoLogoWhatsapp className="mr-2 w-[32px] h-[32px]" />
          {dictionary.Connect_with_WhatsApp}
        </Button>
      </div>
    </div>
  );
};

export default WhatsApp;
