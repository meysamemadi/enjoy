import { IconType } from "react-icons";

interface AttributeProps {
  icon: IconType;
  label: string;
  value: string;
}

const Attribute = ({ label, value, icon: Icon }: AttributeProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-[#FAF5EF] text-[#A07E62]">
        <Icon size={24} />
      </div>
      <div className="flex flex-col">
        <span className=" text-sm font-medium capitalize text-[#A07E62]">
          {label}
        </span>
        <span className="text-base font-semibold capitalize text-[#594636]">
          {value}
        </span>
      </div>
    </div>
  );
};

export default Attribute;
