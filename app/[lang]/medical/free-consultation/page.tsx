import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import ContactHeader from "./_components/contact-header";
import Title from "@/app/[lang]/components/title";
import ContactForm from "./_components/contact-form";
import { University } from "@/types";
import { getUniversity } from "@/actions/educational";

const ConatcPage = async ({
  params,
}: {
  params: {
    lang: string;
  };
}) => {
      const pages = [{ name: "Educational", href: "#", current: true }];


  return (
    <div className="flex-1 bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <ContactHeader />

      <Title title="Free consultation to you" />
      <div className="container">
        <div className="bg-white p-4">
          <div className="bg-[#FAF5EF] p-4 my-6">
            <p className="text-[#594636] text-xs font-bold">
              If you have chosen this doctor for your treatment in Iran, you can
              fill out the form so that we can contact you soon
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};
 
export default ConatcPage;