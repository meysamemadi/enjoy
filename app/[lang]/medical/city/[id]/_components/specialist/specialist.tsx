import Title from "@/app/[lang]/components/title";
import CategoryItem from "./category-item";
import DoctorItem from "./doctor-item";
import { getCategories, getDoctors } from "@/actions/medical";

export const Specialist = async ({
  lang,
  category,
}: {
  lang: string;
  category: string | string[] | undefined;
}) => {
  const categories = await getCategories(lang);

  
  const doctors = await getDoctors(lang, category);

  return (
    <div className="container mt-6 md:mt-[44px] lg:mt-[64px]">
      <Title className="mb-6 md:mb-8 lg:mb-[40px]" title="our specialists" />
      <div className="flex flex-wrap gap-[8px] md:gap-[16px] lg:gap-[24px]">
        {categories.map((category: any) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-6 md:py-[40px]">
        {doctors.map((doctor:any) => (
          <DoctorItem
            key={doctor.id}
            {...doctor}
          />
        ))}
      </div>
    </div>
  );
};
