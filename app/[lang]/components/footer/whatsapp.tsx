import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";

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
        <Button className="bg-[#31CA68] rounded-none text-lg font-bold">
          Connect with WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default WhatsApp;
