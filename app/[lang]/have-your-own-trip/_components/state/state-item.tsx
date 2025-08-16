import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface StateItemProps {
    name: string;
    icon:IconType;
    counter: string;
}

export const StateItem = ({ name , icon:Icon , counter } : StateItemProps) => {
  return (
    <div className="flex flex-col bg-black/50 p-4 text-white">
      <Icon className="w-[48px] h-[48px]" />
      <span
        className={cn(
          Messina_Serif.className,
          "text-[40px] font-bold leading-[normal]"
        )}
      >
        {counter}
      </span>
      <span className={cn(Messina_Serif.className,"text-lg font-semibold")}>{name}</span>
    </div>
  );
}
