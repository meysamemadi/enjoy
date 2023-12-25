import Title from "@/app/[lang]/components/title"
import { Button } from "@/components/ui/button";
import companionImg from "@/public/img/haveyorowntrip/companion.jpg"
import Image from "next/image";

export const Companion = () => {
  return (
    <div className="my-[48px]">
      <Title title="Find your companion" />
      <div className="container">
        <div className="bg-white mt-6 md:mt-[40px] flex flex-col md:flex-row md:items-center ">
          <div className="w-full md:w-1/2 aspect-[1.87/1] ">
            <Image
              className="aspect-[1.87/1] w-full object-cover"
              src={companionImg}
              alt="companion"
            />
          </div>
          <div className="w-full md:w-1/2 h-full  p-6 md:py-[50px] space-y-4 md:space-y-[40px]">
            <p className="text-[#594636] text-sm font-medium leading-[200%]">
              If you intend to travel to Iran but are alone and seek
              co-travelers who match your taste and interests, it is enough to
              inform Enjoy Persia. We search among applicants of your country
              and other ones and suggest the best companions to travel together
              to Iran and have a unique experience.
            </p>
            <Button className="bg-[#F07148] rounded-none w-full font-bold capitalize leading-[85.2%] text-[#FAF7F5]">
              Register the form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
