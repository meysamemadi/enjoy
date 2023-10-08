import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import { IoLogoWhatsapp } from "react-icons/io";
const WhatsApp = () => {
  return (
    <div className="container my-6 md:my-8 ">
      <div className="bg-white py-3 flex flex-wrap gap-2 items-center justify-evenly">
        <h3
          className={cn(
            Messina_Serif.className,
            "text-[19px] font-semibold text-[#594636]"
          )}
        >
          Need more information?
        </h3>
        <Button className="bg-[#31CA68] rounded-none text-base md:text-lg font-bold">
          <IoLogoWhatsapp className="mr-2 w-[32px] h-[32px]" />
          Connect with WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default WhatsApp;
