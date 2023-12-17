import Dropzone from "react-dropzone";
import { cn } from "@/lib/utils";
import { useDropzone } from "react-dropzone";
import { RiUploadLine } from "react-icons/ri";

export const FileInput = ({ onDrop } : {onDrop:any}) => {

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className=" relative flex flex-col py-[56px] justify-center items-center border cursor-pointer  border-dashed border-[#A07E6280]"
    >
      <RiUploadLine className={" w-6 h-6 mb-2 text-[#594636] "} />
      <p className=" hidden md:block text-[#828282] font-medium text-[13px]">
        Click to choose a file or drag here
      </p>

      <p className=" md:hidden  text-[#828282] font-medium text-[13px]">
        Click to choose a file
      </p>

      <input {...getInputProps()} />
    </div>
  );
};
