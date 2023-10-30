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
    id: number;
    lang: string;
  };
}) => {
      const pages = [{ name: "Educational", href: "#", current: true }];

        const university: University= await getUniversity(
          params.lang,
          params.id
        );


  return (
    <div>
      <BreadCrumb pages={pages} />
      <ContactHeader />

      <Title title="Free consultation to you" />
      <div className="container">
        <div className="bg-white p-4">
          <div className="bg-[#FAF5EF] p-4">
            <p className="text-[#594636] text-xs font-bold">
              The following form is for announcing your education tour and we
              will contact you after registering the form.
            </p>
          </div>

          <h3 className="text-[#A07E62] hidden md:block text-lg my-7 font-bold">
            Your Choice: {university.title}
          </h3>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};
 
export default ConatcPage;