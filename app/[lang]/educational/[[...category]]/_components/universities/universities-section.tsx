import Title from "@/app/[lang]/components/title";
import Categories from "./categories";
import { Locale } from "@/i18n-config";
import { Suspense } from "react";
import CategoriesSkeleton from "./categories-skeleton";
import Universities from "./universities";
import { UniversitiesSkeleton } from "./universities-skeleton";

export const UniversitiesSection = async ({
  lang,
  category,
}: {
  lang: Locale;
  category: string;
}) => {
  return (
    <div className="mt-[28px] md:[50px] ">
      <Title title="Universities" />
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories lang={lang} />
      </Suspense>
      <Suspense fallback={<UniversitiesSkeleton />}>
        <Universities lang={lang} category={category} />
      </Suspense>
    </div>
  );
};

