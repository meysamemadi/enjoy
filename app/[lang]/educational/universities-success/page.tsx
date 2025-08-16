import Title from "@/app/[lang]/components/title";
import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import { Locale } from "@/i18n-config";
import { getUniversitySuccess } from "@/actions/educational";
import { Pagination } from "./_components/pagination";
import { SuccessItem } from "./_components/success-item";

const UniversitiesSuccess = async ({
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { items, pagination } = await getUniversitySuccess(
    params.lang,
    searchParams.page
  );

  const pages = [
    { name: "iran's universities Successes", href: "#", current: false },
  ];

  return (
    <div className="flex-1 bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Title title="iran's universities Successes" />

      <div className="mt-4 md:mt-[40px] container grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item: any) => (
          <SuccessItem key={item.id} {...item} />
        ))}
      </div>

      <Pagination {...pagination} />
    </div>
  );
};

export default UniversitiesSuccess;
