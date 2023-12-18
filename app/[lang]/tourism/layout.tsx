import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

import Header from "@/app/[lang]/components/header";
import Footer from "../components/footer/footer";

const TourismLayout = async ({ children , params }:{children:React.ReactNode,params:{lang:Locale}}) => {

    const dictionary = await getDictionary(params.lang);

    return (
      <div className="bg-[#FAF5EF] h-full flex flex-col">
        <Header dictionary={dictionary["main-menu"]} />
        {children}
        <Footer dictionary={dictionary["footer"]} />
      </div>
    );
}
 
export default TourismLayout;