import { getUniversities, getUniversitiesByCategory } from "@/actions/educational";
import { Locale } from "@/i18n-config";
import {UniversitiesCarousel} from "./universities-carousel";

const Universities = async ({
  lang,
  category,
}: {
  lang: Locale;
  category: string;
}) => {
  const universities = await getUniversitiesByCategory(lang, category);

  return <UniversitiesCarousel universities={universities} />;
};
 
export default Universities;