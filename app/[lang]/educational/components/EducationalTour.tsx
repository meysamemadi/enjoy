'use client'
import { ChevronRightIcon } from "lucide-react";
import { Messina_Serif } from "../../font";
import { cn } from "@/lib/utils";
import Educational_tour from "@/public/img/Educational_tour.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MotionDiv } from "../../components/motion";



const EducationalTour = () => {


  const params = useParams();


  return (
    <div className=" container my-6 md:my-8">
      <div className=" relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
        <span
          className={cn(
            "text-lg md:text-[32px] font-semibold text-[#A07E62]",
            Messina_Serif.className
          )}
        >
          Educational tours
        </span>
      </div>
      <div className=" flex overflow-hidden flex-wrap md:flex-nowrap bg-white mt-4 md:mt-[40px]  gap-[24px]">
        <MotionDiv
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col order-2 md:order-1 w-full md:w-[40%] p-6"
        >
          <p className="text-[#594636] text-justify  font-medium text-sm leading-[28px]">
            Enjoy Persia has the ability to make all intersted people,
            instructors and students of all universities of the world experience
            the most unique scientific and educational trips.
          </p>
          <p className=" text-[#594636] text-justify font-medium text-sm leading-[28px]">
            Such trips include tours on Iranian architecture, historiology,
            environment, industries and mines, cultural studies, instruction of
            handicrafts in the Middle East and all other tours combined with
            science and industry and art. It is enough to send us a message.
          </p>
          <Button asChild className="w-full bg-[#497D59] rounded-none mt-auto">
            <Link href={`/${params.lang}/educational/edcational-tour`}>
              Register the form
            </Link>
          </Button>
        </MotionDiv>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 bg-blue-500 w-full md:w-[60%]"
        >
          <Image
            className="w-full h-full object-cover"
            src={Educational_tour}
            alt="educational tour"
          />
        </MotionDiv>
      </div>
    </div>
  );
};

export default EducationalTour;
