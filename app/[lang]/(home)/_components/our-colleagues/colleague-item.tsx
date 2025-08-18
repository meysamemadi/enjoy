import snap from "@/public/img/snapp.png"
import Image from "next/image";
import {router} from "next/client";
interface ColleagueItemProps {
    name: string
}

type BannerProps = {
    id: number;
    title: string;
    link: string;
    image: string;
}

export const ColleagueItem = ({ id , title , link , image }: BannerProps) => {
  return (
      <a href={link} target="_blank" rel="noopener noreferrer">
          <div
              className=" aspect-video max-h-[242px] flex items-center justify-center bg-[#A07E62] text-white">
              <Image src={image} width={600} height={242} alt="snap" />
          </div>
      </a>

  );
}
