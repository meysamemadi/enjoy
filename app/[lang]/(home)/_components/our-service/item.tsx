import { IconType } from "react-icons"

interface ItemProps {
    icon: IconType;
    name: string;
}
export const Item = ({ icon:Icon , name}: ItemProps) => {
  return (
    <div className="  w-1/2 md:w-1/6 flex flex-col justify-center items-center gap-4 my-6">
      <div className="relative">
        <Icon className=" relative text-[#A07E62] w-[64px] h-[64px] z-10" />
        <div className=" absolute w-[38px] h-[38px] bg-[#FAF5EF] z-0 left-0 bottom-0" />
      </div>

      <span className=" text-sm font-bold capitalize leading-[normal] text-[#594636]">
        {name}
      </span>
    </div>
  );
}
