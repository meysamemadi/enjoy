'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import qs from "query-string";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface CategoryItemProps {
  id: string;
  name: string;
  image?: string;
}
const CategoryItem = ({ id, name , image }: CategoryItemProps) => {
  const router = useRouter();
  const param = useParams();
  const params = useSearchParams();

    const handleClick = useCallback(() => {
      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: id,
      };

      if (params?.get("category") == id) {
        delete updatedQuery.category;
      }

      const url = qs.stringifyUrl(
        {
          url: `/${param.lang}/medical/city/${param.id}/`,
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    }, [id, router, params]);


  return (
    // <Link href={}>
    <div
      onClick={handleClick}
      className={cn(
        "bg-white cursor-pointer text-center capitalize p-1 flex items-center justify-items-center justify-center hover:bg-[#43B8A21A]/10 w-fit md:w-[164px] whitespace-nowrap md:whitespace-normal text-sm font-semibold text-[#594636]",
        params?.get("category") == id &&
          "bg-[#43B8A2] text-white hover:bg-[#43B8A2]/80"
      )}
    >
      {name}
    </div>
    // </Link>
  );
};

export default CategoryItem;
