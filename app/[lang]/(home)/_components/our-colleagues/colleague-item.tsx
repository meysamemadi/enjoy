import snap from "@/public/img/snapp.png"
import Image from "next/image";
interface ColleagueItemProps {
    name: string
}

export const ColleagueItem = ({ name }: ColleagueItemProps) => {
  return (
    <div className=" aspect-video max-h-[242px] flex items-center justify-center bg-[#A07E62] text-white">
      <Image src={snap} alt="snap" />
    </div>
  );
}
