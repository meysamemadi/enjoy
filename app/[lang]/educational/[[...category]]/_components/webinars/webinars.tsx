import { LastWebinars } from "./last-webinars";
import { FeaturedWebinar } from "./featured-webinar"
import { Locale } from "@/i18n-config";
import { getFeaturedWebinar, getWebinars } from "@/actions/educational";

export const Webinars = async({ lang } : {lang:Locale}) => {

   const webinars = await getWebinars(lang);
   const Featured = await getFeaturedWebinar(lang);


    return (
      <div className="my-6 md:my-8 space-y-[32px]">
        <FeaturedWebinar Featured={Featured} />
        <LastWebinars webinars={webinars} />
      </div>
    );
}
 
