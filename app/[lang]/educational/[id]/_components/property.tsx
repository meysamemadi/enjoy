'use client'

interface PropertyProps {
    title : string
    description : string | boolean
    type : boolean
}

const Property = ({title , description , type} : PropertyProps) => {
    return (
      <div className="grid grid-cols-4">
        <div className=" col-span-1 text-[#594636] text-sm font-medium capitalize py-[10px]">
          {title}
        </div>
        <div className=" col-span-3 bg-white py-[10px] px-4 text-sm font-medium text-[#594636]">
          {description}
        </div>
      </div>
    );
}
 
export default Property;