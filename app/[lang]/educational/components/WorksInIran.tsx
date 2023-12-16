'use client'
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import workInIran from "@/public/img/work_in_iran.png"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MotionDiv } from "../../components/motion";

const WorksInIran = () => {

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
          Work in Iran
        </span>
      </div>
      <div className=" flex flex-wrap md:flex-nowrap bg-white mt-4 md:mt-[40px]  gap-[24px]">
        <MotionDiv
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className=" bg-blue-500 w-full md:w-[60%]"
        >
          <Image
            className="w-full h-full object-cover"
            src={workInIran}
            alt="Work in Iran"
          />
        </MotionDiv>
        <MotionDiv
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col  w-full md:w-[40%] p-6"
        >
          <p className="text-[#594636] text-justify  font-medium text-sm leading-[28px]">
            If you intend to travel to Iran but are alone and seek co-travelers
            who match your taste and interests, it is enough to inform Enjoy
            Persia. We search among applicants of your country and other ones
            and suggest the best companions to travel together to Iran and have
            a unique experience.
          </p>

          <Button asChild className="w-full bg-[#497D59] rounded-none mt-auto">
            <Link href={`/${params.lang}/educational/work-in-iran`}>
              {" "}
              Register the Form
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </div>
  );
};

export default WorksInIran;
