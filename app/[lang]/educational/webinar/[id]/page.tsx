import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import MainWebinar from "./_components/main-webinar";
import Title from "@/app/[lang]/components/title";
import Attribute from "./_components/attribute";
import contactImg from "@/public/img/contact.png"

import { BiUserVoice, BiTime , BiDownload} from "react-icons/bi";
import {
  RiCalendar2Line,
  RiMapPin2Line,
  RiGovernmentLine,
} from "react-icons/ri";
import { PiTranslate } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import WebinarForm from "./_components/webinar-form";



const WebinarSinglePage = () => {
  const pages = [
    { name: "Webinars", href: "#", current: false },
    {
      name: "webinar title",
      href: "#",
      current: true,
    },
  ];

  return (
    <div>
      <BreadCrumb pages={pages} />

      <div className="container">
        <MainWebinar
          title="Shahname Reading"
          langs="English,French"
          subject="Persian Culture"
          type="upcoming"
        />
      </div>
      <Title
        className="mt-[48px] md:mt-[65px]"
        title={"About Shahname Reading Webinar"}
      />
      <div className="container">
        <div className="bg-white p-6 md:p-[30px] lg:p-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <Attribute
            label="Presentation By:"
            value="Saeed Ahmadi"
            icon={BiUserVoice}
          />
          <Attribute label="Date:" value="May 6" icon={RiCalendar2Line} />
          <Attribute label="Time:" value="19:00 - 22:00" icon={BiTime} />
          <Attribute label="Location:" value="Online" icon={RiMapPin2Line} />
          <Attribute label="Language:" value="En, fa" icon={PiTranslate} />
          <Attribute
            label="Organizer:"
            value="Tehran University"
            icon={RiGovernmentLine}
          />
        </div>

        <div>
          <p className="text-[#594636] py-6 font-medium">
            Enjoy Persia as a sub-branch of Raha commercial group
            (rahabusiness.com) is a tourism company that delivers the most
            diverse amusement and traveling services with cooperation of big
            community of Iran tourism. By such services that are delivered to
            tourists for the first time in Iran, we enable you to travel based
            on your own taste and have attractive and memorable experiences.
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
    </div>
  );
};

export default WebinarSinglePage;
