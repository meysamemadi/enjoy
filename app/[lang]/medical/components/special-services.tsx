import { getServices } from "@/actions/medical";
import ServiceItem from "./service";
import { MedicalSpecialService } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";


interface SpecialServicesProps {
  lang: string
}

export const SpecialServices = async ({ lang }: SpecialServicesProps) => {

    const services   = await getServices(lang);

    return (
      <div className="container my-4  grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
        {services.map((service: MedicalSpecialService) => (
          <ServiceItem key={service.id} {...service} />
        ))}

        {/* <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service /> */}
      </div>
    );
}
 

SpecialServices.Skeleton = function SpecialServicesSkeleton() {
  return (
    <div className="container mt-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
      <div className="w-full h-full flex flex-col max-h-[334px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className="w-full h-full flex flex-col max-h-[334px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>

      <div className="w-full h-full flex flex-col max-h-[334px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className="w-full h-full flex flex-col max-h-[334px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
    </div>
  );
};;