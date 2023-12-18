import { Skeleton } from "@/components/ui/skeleton";

export const SpecialServicesSkeleton = () => {
      return (
        <div className="container h-full my-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          <div className="w-full h-full flex flex-col aspect-[1/3]  max-h-[334px]">
            <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
            <Skeleton className="w-full h-1/4 bg-neutral-200" />
          </div>
          <div className="w-full h-full flex flex-col aspect-[1/3] max-h-[334px]">
            <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
            <Skeleton className="w-full h-1/4 bg-neutral-200" />
          </div>

          <div className="w-full h-full flex flex-col aspect-[1/3] max-h-[334px]">
            <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
            <Skeleton className="w-full h-1/4 bg-neutral-200" />
          </div>
          <div className="w-full h-full flex flex-col aspect-[1/3] max-h-[334px]">
            <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
            <Skeleton className="w-full h-1/4 bg-neutral-200" />
          </div>
        </div>
      );
}
 
