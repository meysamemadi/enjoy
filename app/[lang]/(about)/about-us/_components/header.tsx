
import { HeaderWithBg } from "@/app/[lang]/(about)/_components/header"
import BreadCrumb from "@/app/[lang]/components/breadcrumb"
import { Messina_Serif, brand, harmony, montserrat } from "@/app/[lang]/font";
import { Locale } from "@/i18n-config"
import { cn } from "@/lib/utils";
import aboutImg from "@/public/img/base/about_01.png"
import cultureImg from "@/public/img/base/about_02.png"
import Image from "next/image";

export const Header = ({ lang }: { lang: Locale }) => {


    const pages = [{ name: "About us", href: "", current: true }];

    return (


        <HeaderWithBg lang={lang}>

            <BreadCrumb pages={pages} />

            <div className=' container'>
                <div className="flex flex-col justify-center items-center gap-0">
                    <h3 className={cn(brand.className, "m-0 leading-[normal] font-normal text-[80px] lg:text-[104px] text-[#A07E62]")}>enjoy</h3>
                    <h3 className={cn(brand.className, "m-0 leading-[normal] -mt-[50px] font-normal text-[98px] lg:text-[128px] text-[#A07E62]")}>persia</h3>
                    <p className={cn(harmony.className, " text-[64px] lg:text-[92px] leading-[normal] font-normal text-[#707070] text-center")}>Lovely destination for your next travel</p>
                </div>

                <div className=" flex  flex-col-reverse lg:flex-row gap-4 mt-[28px] lg:mt-[80px]">
                    <div className=" w-full lg:w-[45%] lg:max-w-[446px]">

                        <h2 className={cn(Messina_Serif.className, " mb-4 lg:mb-6 text-[18px] lg:text-[46px] leading-[85.2%] font-semibold text-[#594636]")}>About Enjoy Persia</h2>
                        <p className={cn(montserrat.className, " text-sm text-[#594636] font-medium leading-[190%]")}>
                            Enjoy Persia as a tourism company that delivers the most diverse amusement and traveling services with cooperation of big community of Iran tourism. By such services that are delivered to tourists for the first time in Iran, we enable you to travel based on your own taste and have attractive and memorable experiences.
                            Our diverse services include: exporting handicrafts to your country and city, planning business tour especially for traders and businessmen interested in traveling to Iran to visit our industries, factories and fairs, organizing health tours in twelve cities of Iran for the first time in accordance with your taste to enjoy various attractions of our country, holding diverse and attractive amusement tours and also having a special plan (have your own trip) for the first time in Iran in which Enjoy Persia provides you with the chance to choose the whole tourism services including tour leader, residence, photographer, restaurant, car and other various packages based on your own taste and needs and enjoy your trip completely.
                        </p>
                    </div>
                    <div className="w-full lg:w-[55%]">
                        <Image alt="about enjoy persia" src={aboutImg} />
                    </div>
                </div>

                <div className=" flex flex-col lg:flex-row gap-4 mt-[28px] lg:mt-[80px] ">
                    <div className=" w-full lg:w-[45%] lg:max-w-[446px]">


                        <Image alt="about enjoy persia" src={cultureImg} />

                    </div>
                    <div className="w-full lg:w-[55%]">
                        <h2 className={cn(Messina_Serif.className, " mb-4 lg:mb-6 text-[18px] lg:text-[46px] leading-[85.2%] font-semibold text-[#594636]")}>Our work culture</h2>
                        <p className={cn(montserrat.className, " text-sm text-[#594636] font-medium leading-[190%]")}>
                            It may have happened to you that while searching for information about traveling to Iran in media and social networks, you see Iran introduced as a country facing security challenges, inadequate facilities and several hardships for traveling. Numerous studies have indicated that 80% of people who travel to Iran had a very different and even negative idea beforehand, but got so excited by hospitality, ancient history and unique tourist attractions of this country later on.
                            We try to help you know real Iran in the best manner by delivering the most high-quality and diverse traveling services in Enjoy Persia.
                            This country is unparalleled in the world due to its 7000-year history, four-season climate with geographical diversity including jungles, deserts, mountains, seas, wildlife full of animal variety, spectacular architecture and tribes with diverse traditions.
                        </p>
                    </div>
                </div>
            </div>
        </HeaderWithBg>



    )
}
