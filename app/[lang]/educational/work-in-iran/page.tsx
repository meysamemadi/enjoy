import { Locale } from "@/i18n-config";
import BreadCrumb from "../../components/breadcrumb";
import Header from "./_components/header";
import EdcationalForm from "./_components/edcational-form";

const WorkInIran = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const pages = [
    { name: "Educational", href: "#", current: false },
    { name: "Work In Iran", href: "#", current: true },
  ];

  return (
    <div>
      <BreadCrumb pages={pages} />
      <Header />
      <EdcationalForm />
    </div>
  );
};
 
export default WorkInIran;