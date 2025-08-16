import { Skeleton } from "@/components/ui/skeleton";

export const CitiesHealthServiceSkeleton = () => {
  return (
    <div className="container h-full my-4 grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
      <div className="w-full h-full flex flex-col aspect-[2/1.5]  max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className="w-full h-full flex flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>

      <div className="w-full h-full flex flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className="w-full h-full flex flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className="w-full h-full flex flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>

      <div className="  w-full h-full flex-col aspect-[2/1.5]  max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className=" hidden md:flex w-full h-full flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>

      <div className=" hidden md:flex w-full h-full flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className=" hidden md:flex w-full h-full flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
      <div className=" hidden md:flex w-full h-full flex-col aspect-[2/1.5] max-h-[213px]">
        <Skeleton className="w-full h-3/4 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-1/4 bg-neutral-200" />
      </div>
    </div>
  );
};
