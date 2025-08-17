import Image from "next/image";
import { BiSolidQuoteRight } from "react-icons/bi";


type CommentProps = {
  id: number;
  name: string;
  comment: string;
  profile: string;
  country: string;
}

export const SayItem = ({id , name, comment ,country , profile}:CommentProps) => {
  return (
    <div className=" relative md:aspect-[2.54/1] h-full pt-4">
      <BiSolidQuoteRight className=" text-[#594636] w-[32px] md:w-[38px] h-[24px] md:h-[28px] absolute top-4 right-4 z-10" />
      <div className="  mt-4 h-full bg-white p-4 flex flex-row gap-4 items-center">
        <div className="w-1/3 md:w-1/4">
          <div className=" aspect-square">
            <Image
              className=" object-cover w-[55px] h-[55px] md:w-[88px] md:h-[88px]"
              src={profile}
              alt={name}
              width={88}   // مقدار بزرگتر رو بده (Next.js نیاز داره)
              height={88}
            />
          </div>
          <p className=" text-[8px] text-xs text-[#594636] font-normal leading-[normal] mt-1">
            {country}
          </p>
        </div>
        <div className="w-2/3 md:w-3/4 flex flex-col justify-center">
          <p className="text-[#594636] font-bold">{name}</p>
          <p className="text-sm font-medium leading-[200%] text-[#594636]">
            {comment}
          </p>
        </div>

        <BiSolidQuoteRight className=" text-[#594636]/5 w-[86px] md:w-[140px] h-[63px] md:h-[103px] absolute bottom-[20%] md:bottom-[15%] left-[25%] z-0 " />
      </div>
    </div>
  );
};
