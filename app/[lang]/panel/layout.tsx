import Header from "@/app/[lang]/components/header/header";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Footer from "../components/footer/footer";
import { HeaderContainer } from "../components/header";

const PanelLayout = async ({ children , params } : {children:React.ReactNode,params:{lang: Locale}}) => {

     const dictionary = await getDictionary(params.lang);
   
  return (
    <div className="bg-[#FAF5EF] h-full flex flex-col">
      <HeaderContainer lang={params.lang} />
      {children}
      <Footer dictionary={dictionary["footer"]} />
    </div>
  );
};

export default PanelLayout;