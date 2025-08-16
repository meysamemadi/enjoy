import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import Title from "@/app/[lang]/components/title";
import contactImg from "@/public/img/contact.png";

import { BiUserVoice, BiTime, BiDownload } from "react-icons/bi";
import {
  RiCalendar2Line,
  RiMapPin2Line,
  RiGovernmentLine,
} from "react-icons/ri";
import { PiTranslate } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import MainWebinar from "./_components/main-webinar";
import Attribute from "./_components/attribute";
import WebinarForm from "./_components/webinar-form";
import { getWebinar } from "@/actions/educational";
import { Webinar } from "@/types";
import { notFound } from "next/navigation";

const WebinarPage = async ({
  params,
}: {
  params: { id: string; lang: Locale };
}) => {
  const webinar: Webinar | false = await getWebinar(params.lang, params.id);

  if (!webinar) {
    notFound();
  }

  const pages = [
    {
      name: "Webinars",
      href: `/${params.lang}/educational/webinar`,
      current: false,
    },
    {
      name: webinar.title,
      href: `/${params.lang}/edcational/webinar/${params.id}`,
      current: true,
    },
  ];

  return (
    <div>
      <BreadCrumb pages={pages} />
      <div className="container">
        <MainWebinar
          title={webinar.title}
          langs={webinar.languages}
          subject={webinar.subject}
          type={webinar.type}
        />
      </div>
      <Title className="mt-[48px] md:mt-[65px]" title={webinar.title} />
      <div className="container">
        <div className="bg-white p-6 md:p-[30px] lg:p-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <Attribute
            label="Presentation By:"
            value={webinar.present_by}
            icon={BiUserVoice}
          />
          <Attribute
            label="Date:"
            value={webinar.start_date}
            icon={RiCalendar2Line}
          />
          <Attribute label="Time:" value={webinar.start_time} icon={BiTime} />
          <Attribute
            label="Location:"
            value={webinar.location}
            icon={RiMapPin2Line}
          />
          <Attribute
            label="Language:"
            value={webinar.languages}
            icon={PiTranslate}
          />
          <Attribute
            label="Organizer:"
            value={webinar.organizer}
            icon={RiGovernmentLine}
          />
        </div>

        <div>
          <p className="text-[#594636] py-6 font-medium">
            {webinar.description}
          </p>

          <Link
            className="flex gap-1 text-sm text-[#594636] items-center py-2 px-3 border border-[#A07E62] w-fit"
            href={"/"}
          >
            Download Video
            <BiDownload className="text-[#594636]" size={20} />
          </Link>
        </div>
      </div>

      {webinar.type === "webinar" && (
        <>
          <Title
            className="mt-[48px] md:mt-[65px]"
            title={"Registration to Shahname Reading"}
          />
          <div className="container">
            <div className="bg-white p-4 md:p-[40px] lg:p-[60px]">
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full md:w-[60%] order-2 md:order-1">
                  <WebinarForm />
                </div>
                <div className="w-full md:w-[60%] order-1 md:order-2">
                  <Image
                    className="object-cover w-full h-full"
                    alt="contact"
                    src={contactImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WebinarPage;
