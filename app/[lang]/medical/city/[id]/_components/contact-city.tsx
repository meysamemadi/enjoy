'use client'
import { Messina_Serif } from "@/app/[lang]/font";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

const ContactCity = () => {
  const params = useParams();
    return (
      <div className="container mt-[48px] md:mt-[110px] flex flex-col space-y-6 items-center justify-center">
        <h3
          className={cn(
            Messina_Serif.className,
            " text-2xl md:text-[40px] lg:text-[56px] text-[#594636] font-semibold capitalize"
          )}
        >
          Is this City your choice?
        </h3>
        <p className=" text-[#594636] text-sm font-medium max-w-[728px] text-center">
          If you have chosen this City for your treatment in Iran. You can fill
          out the form so we can contact you soon.
        </p>
        <Button
          asChild
          className={cn(
            "bg-[#43B8A2] w-full max-w-[728px] text-[#FAF7F5] text-[22px] py-4 font-bold rounded-none",
            Messina_Serif.className
          )}
        >
          <Link href={`/${params.lang}/medical/free-consultation`}>Get In Touch</Link>
        </Button>
      </div>
    );
}
 
export default ContactCity;