import { cn } from "@/lib/utils";
import BreadCrumb from "../../components/breadcrumb";
import MainWebinar from "./_components/main-webinar";
import Webinar from "./_components/webinar";

const Webinars = () => {

      const pages = [{ name: "Webinars", href: "#", current: false }];

    return (
      <div className="w-full self-start mb-auto">
        <BreadCrumb pages={pages} />
        <MainWebinar />
        <div className="pt-4 container">
          <div className=" py-2 border-b border-[#A07E624D]/30">
            <span
              className={cn(
                "text-lg md:text-[32px] font-semibold text-[#A07E62] capitalize "
              )}
            >
              All Webinars
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 py-4 gap-4 ">
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
            <Webinar
              title="Shahname Reading"
              author="Saeed"
              start_at="19:00 - 22:00 - May 6"
            />
          </div>
        </div>
      </div>
    );
}
 
export default Webinars;