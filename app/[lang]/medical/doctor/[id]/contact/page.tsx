import BreadCrumb from "@/app/[lang]/components/breadcrumb";
import ContactHeader from "./_components/contact-header";
import Title from "@/app/[lang]/components/title";
import ContactForm from "./_components/contact-form";


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

      <Title title="Reservation this doctor " />
      <div className="container">
        <div className="bg-white p-4 md:px-[60px] lg:px-[90px]">
          <div className="bg-[#FAF5EF] p-4 my-6">
            <p className="text-[#594636] text-xs font-bold">
              the following form is for announcing your health tourism and we
              will contact you after registering the form.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};
 
export default ConatcPage;