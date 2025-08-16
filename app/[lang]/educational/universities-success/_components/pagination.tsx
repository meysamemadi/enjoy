"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export const Pagination = ({
  total,
  page,
  pageSize,
}: {
  total: number;
  page: number;
  pageSize: number;
}) => {
  const router = useRouter();
  const params = useParams();

  const totalPages = Math.ceil(total / pageSize);

  let element = [];

  for (let index = 0; index < totalPages; index++) {
    element.push(
      <Button
        key={index}
        onClick={() => {
          router.push(
            `/${params.lang}/educational/universities-success?page=${index + 1}`
          );
        }}
        className={cn(
          " rounded-none bg-white hover:bg-[#497D591A] hover:text-[#594636] font-medium text-[12px] text-[#594636] aspect-square",
          page === index && "bg-[#497D59] text-white font-bold"
        )}
        size={"sm"}
      >
        {index + 1}
      </Button>
    );
  }

  if (totalPages > 1) {
    return (
      <div className="flex items-center justify-center space-x-3 mt-4">
        {element}
      </div>
    );
  }
};
