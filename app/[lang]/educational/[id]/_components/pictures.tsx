import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PictureProps {
    gallery : string[]
}

const Picutre = ({gallery} : PictureProps) => {
    return (
      <div className=" container my-6 md:my-8">
        <div className=" relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
          <span
            className={cn(
              "text-lg md:text-[32px] font-semibold text-[#A07E62]",
              Messina_Serif.className
            )}
          >
            More Picture
          </span>
        </div>

        <div className="grid mt-4 grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            {gallery && gallery.map(pic => (
                <div key={pic} className=" h-[265px]">
                    <Image className="w-full h-full object-cover" width={353} height={265} src={pic} alt="gallery" />
                </div>
                ))}

        </div>
      </div>
    );
}
 
export default Picutre;