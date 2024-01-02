import { getDoctor } from "@/actions/medical";
import { Messina_Serif } from "@/app/[lang]/font";
import { Separator } from "@/components/ui/separator";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

const DoctorPage = async ({ params }: { params: { lang: Locale; id: string } }) => {

    const doctor = await getDoctor(params.lang,params.id);

    if(!doctor)
    {
        notFound()
    }

    console.log(doctor)

  return (
    <div className="flex-1 h-full">
      <div className="container bg-white mt-[150px] inline-block w-full relative">
        <div className="text-center">
          <div className="w-[164px] h-[164px] aspect-square relative mx-auto -mt-[80px]">
            <Image
              alt={doctor.name}
              fill
              className=" object-cover"
              src={doctor.avatar}
            />
          </div>
          <div className="mt-4 md:mt-6">
            <h2
              className={cn(
                Messina_Serif.className,
                "text-[20px] md:text-[32px] text-[#A07E62] capitalize leading-[noraml] mb-2 md:mb-3"
              )}
            >
              {doctor.name}
            </h2>
            <p className="text-sm md:text-lg font-semibold capitalize text-[#594636] mb-2">
              {doctor?.category?.name}
            </p>
            <p className="text-[#A07E62] text-xs md:text-sm font-semibold capitalize">
              Since {doctor.year} till now
            </p>
          </div>
          <Separator className="bg-[#A07E624D] mt-3 mb-5 md:my-8" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:px-[60px] lg:px-24">
              <p className="text-left font-semibold capitalize text-[#594636]">
                Therapeutic measures:
              </p>
              <ul className=" list-[square] list-inside marker:text-lg text-[#594636] text-xs items-start justify-start text-left">
                {doctor.therapeutic.map(
                  (item: any) =>
                    item.value && <li key={item.id}>{item.name}</li>
                )}
              </ul>

              <p className="text-left font-semibold capitalize text-[#594636] mt-[32px] md:mt-[24px]">
                Activity days:
              </p>
              <ul className=" mb-8 list-[square] list-inside marker:text-lg text-[#594636] text-xs items-start justify-start text-left">
                <li>{doctor.activity_days}</li>
              </ul>
            </div>
            <div>
              <p className="text-left font-semibold capitalize text-[#594636] mt-[32px] md:mt-[24px]">
                Specializations and university degrees
              </p>
              <ul className=" list-[square] list-inside marker:text-lg text-[#594636] text-xs items-start justify-start text-left">
                {doctor.degree.map((item: any) => (
                  <li className=" font-semibold text-xs capitalize" key={item.id}>
                    <span>{item.name}</span>
                    <span className="block px-4">{item.value}</span>
                  </li>
                ))}
              </ul>

              <p className="text-left font-semibold capitalize text-[#594636] mt-[32px] md:mt-[24px]">
                Specializations and university degrees
              </p>
              <ul className=" list-[square] list-inside marker:text-lg text-[#594636] text-xs items-start justify-start text-left">
                <li>{doctor.activity_days}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default DoctorPage;