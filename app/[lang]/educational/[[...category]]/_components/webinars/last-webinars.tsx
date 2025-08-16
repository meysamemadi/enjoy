import Title from "@/app/[lang]/components/title";
import { Webinar } from "@/types";
import { WebinarItem } from "./webinar-item";

export const LastWebinars = ({ webinars }: { webinars: Webinar[] }) => {
  if (webinars.length) {
    return (
      <div>
        <Title title="Our last online webinars" />
        <div className="container grid grid-cols-2 my-4 gap-4 md:gap-6">
          {webinars.map((webinar) => (
            <WebinarItem key={webinar.id} id={webinar.id} title={webinar.title} subject={webinar.subject} lang={webinar.languages} image={webinar.main_pic}  time="06 Jan 2021" />
          ))}
        </div>
      </div>
    );
  }
};
