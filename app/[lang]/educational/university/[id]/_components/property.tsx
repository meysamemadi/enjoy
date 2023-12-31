'use client'
import {BsCheckLg} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import { type } from "os"

interface PropertyProps {
    name : string
    value : string | boolean
    type : boolean
}

const Property = ({name , value,type} : PropertyProps) => {

    let response;
    if(type)
    {
      if(value)
      {
        response = <BsCheckLg  size={25} />
      }else{
         response = <AiOutlineClose size={25} />;
      }
    }
    return (
      <div className="grid grid-cols-4">
        <div className=" col-span-1 text-[#594636] text-sm font-medium capitalize py-[10px]">
          {name}
        </div>
        <div className=" col-span-3 bg-white py-[10px] px-4 text-sm font-medium text-[#594636]">
          {type ? response : value}
        </div>
      </div>
    );
}
 
export default Property;