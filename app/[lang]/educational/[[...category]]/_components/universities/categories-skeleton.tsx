import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSkeleton = () => {
  return (
    <div className=" container grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 ">
      <div className="border rounded-sm border-white p-1">
        <Skeleton className="w-full h-8 bg-white" />
      </div>
      <div className="border rounded-sm border-white p-1">
        <Skeleton className="w-full h-8 bg-white" />
      </div>
      <div className="border rounded-sm border-white p-1">
        <Skeleton className="w-full h-8 bg-white" />
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
