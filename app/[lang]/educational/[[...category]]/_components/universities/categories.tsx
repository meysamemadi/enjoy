import { getCategories } from "@/actions/educational";
import { Locale } from "@/i18n-config";
import CategoriesCarousel from "./categories-carousel";

const Categories = async ({ lang }:{ lang : Locale}) => {

    const categories = await getCategories(lang);

    return (
      <div className="container mt-6 md:mt-[40px]">
        <CategoriesCarousel categories={categories} />
      </div>
    );
}
 
export default Categories;