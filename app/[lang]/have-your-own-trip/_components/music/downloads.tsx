import { Button } from '@/components/ui/button'
import React from 'react'
import { RiDownloadLine } from 'react-icons/ri'

export const Downloads = () => {
  return (
    <div className="container mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
      <Button className=" text-sm text-[#594636] font-semibold leading-[111.5%] capitalize rounded-none border border-[#A07E62] bg-inherit hover:bg-[#F07148] hover:border-0 hover:text-white">
        pop <RiDownloadLine className={"w-6 h-6 ml-2"} />
      </Button>

      <Button className=" text-sm text-[#594636] font-semibold leading-[111.5%] capitalize rounded-none border border-[#A07E62] bg-inherit hover:bg-[#F07148] hover:border-0 hover:text-white">
        Traditional <RiDownloadLine className={"w-6 h-6 ml-2"} />
      </Button>

      <Button className=" text-sm text-[#594636] font-semibold leading-[111.5%] capitalize rounded-none border border-[#A07E62] bg-inherit hover:bg-[#F07148] hover:border-0 hover:text-white">
        Rap <RiDownloadLine className={"w-6 h-6 ml-2"} />
      </Button>

      <Button className=" text-sm text-[#594636] font-semibold leading-[111.5%] capitalize rounded-none border border-[#A07E62] bg-inherit hover:bg-[#F07148] hover:border-0 hover:text-white">
        Rock <RiDownloadLine className={"w-6 h-6 ml-2"} />
      </Button>

      <Button className=" text-sm text-[#594636] font-semibold leading-[111.5%] capitalize rounded-none border border-[#A07E62] bg-inherit hover:bg-[#F07148] hover:border-0 hover:text-white">
        Traditional <RiDownloadLine className={"w-6 h-6 ml-2"} />
      </Button>

      <Button className=" text-sm text-[#594636] font-semibold leading-[111.5%] capitalize rounded-none border border-[#A07E62] bg-inherit hover:bg-[#F07148] hover:border-0 hover:text-white">
        Combined <RiDownloadLine className={"w-6 h-6 ml-2"} />
      </Button>
    </div>
  );
}
