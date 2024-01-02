import Title from "@/app/[lang]/components/title";
import { Separator } from "@/components/ui/separator";
import {
  RiBook2Fill,
  RiHeart2Fill,
  RiMailSendFill,
  RiFileEditFill,
  RiBuilding4Fill,
} from "react-icons/ri";
import {BsChevronRight} from "react-icons/bs"
import { University } from "@/types";



const ContactHeader = () => {
  return (
    <div>
      <Title title="Counseling steps" />
      <div className="container ">
        <div className="bg-white mb-8 p-4 flex items-center flex-wrap md:flex-nowrap justify-center">
          <div className="flex flex-col gap-4 items-center justify-center basis-2/5 md:basis-auto">
            <RiBook2Fill className={" text-[#497D59]"} size={42} />
            <p className="  text-xs md:text-sm font-semibold md:font-semibold text-center text-[#594636] ">
              sending information
            </p>
          </div>

          <div className=" basis-1/5 relative flex justify-center items-center w-full ">
            <Separator />
            <BsChevronRight size={10} className="text-[#594636] absolute " />
          </div>

          <div className="flex flex-col gap-4 items-center justify-center basis-2/5 md:basis-auto">
            <RiBuilding4Fill className={" text-[#497D59]"} size={42} />
            <p className="  text-xs md:text-sm font-semibold md:font-semibold text-center text-[#594636] ">
              medical examination and response
            </p>
          </div>

          <div className=" basis-full h-[45px]   md:basis-1/5 my-4 md:my-auto   relative flex justify-center items-center  w-full ">
            <Separator className=" hidden md:block " />
            <Separator orientation="vertical" className=" block md:hidden " />
            <BsChevronRight
              size={10}
              className="text-[#594636] absolute rotate-90 md:rotate-0 "
            />
          </div>

          <div className="flex flex-col gap-4 items-center justify-center basis-2/5 md:basis-auto">
            <RiMailSendFill className={" text-[#497D59]"} size={42} />
            <p className="  text-xs md:text-sm font-semibold md:font-semibold text-center text-[#594636] ">
              travel to Iran and treatment
            </p>
          </div>

          <div className=" basis-1/5 relative flex justify-center items-center w-full ">
            <Separator />
            <BsChevronRight size={10} className="text-[#594636] absolute " />
          </div>

          <div className="flex flex-col gap-4 items-center justify-center basis-2/5 md:basis-auto">
            <RiFileEditFill className={" text-[#497D59]"} size={42} />
            <p className="  text-xs md:text-sm font-semibold md:font-semibold text-center text-[#594636] ">
              Fun alongside therapy
            </p>
          </div>

          <div className=" basis-full h-[45px]   md:basis-1/5 my-4 md:my-auto   relative flex justify-center items-center  w-full ">
            <Separator className=" hidden md:block " />
            <Separator orientation="vertical" className=" block md:hidden " />
            <BsChevronRight
              size={10}
              className="text-[#594636] absolute rotate-90 md:rotate-0 "
            />
          </div>

          <div className="flex flex-col gap-4 items-center justify-center basis-2/5 md:basis-auto">
            <RiHeart2Fill className={" text-[#497D59]"} size={42} />
            <p className="  text-xs md:text-sm font-semibold md:font-semibold text-center text-[#594636] ">
              Fun alongside therapy
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ContactHeader;
