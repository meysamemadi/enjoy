import { Skeleton } from "@/components/ui/skeleton";

export const UniversitiesSkeleton = () => {
    return (
      <div className=" mt-6 container grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        <div className="border border-white p-1 rounded-sm aspect-[1/1.29] flex flex-col gap-1">
          <Skeleton className="bg-white w-full h-2/3" />

          <Skeleton className="bg-white w-full h-1/3" />
        </div>

        <div className="border border-white p-1 rounded-sm aspect-[1/1.29] flex flex-col gap-1">
          <Skeleton className="bg-white w-full h-2/3" />

          <Skeleton className="bg-white w-full h-1/3" />
        </div>

        <div className="border border-white p-1 rounded-sm aspect-[1/1.29] flex flex-col gap-1">
          <Skeleton className="bg-white w-full h-2/3" />

          <Skeleton className="bg-white w-full h-1/3" />
        </div>
      </div>
    );
}
 
