'use client'
import Image from "next/image";
import WhatsApp from "./whatsapp";
import Logo from  "@/public/img/Logo.svg"
import PWA from "@/public/img/PWA.svg"
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import visa from "@/public/img/Visa.png"
import master from "@/public/img/Maestro.png"
import master1 from "@/public/img/MasterCard.png"
import paypal from "@/public/img/PayPal.png"

import facebook from "@/public/img/facebook.svg"
import telegram from "@/public/img/telegram.svg"
import inlogo from "@/public/img/in.svg"
import instagram from "@/public/img/instagram.svg" 
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="h-full">
      <WhatsApp />
      <div className="bg-white">
        <div className=" container relative">
          <div className=" relative ">
            <Image
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={Logo}
              alt="Logo"
            />
          </div>
          <div className="flex flex-wrap justify-between gap-2 pt-10 md:pt-16">
            <div className="w-full md:max-w-[400px]">
              <h4
                className={cn(
                  Messina_Serif,
                  " text-2xl font-semibold text-[#A07E62] py-4"
                )}
              >
                About Enjoy Persia
              </h4>
              <p className="text-xs font-medium text-[#594636] line-clamp-3 md:line-clamp-none">
                Enjoy Persia as a sub-branch of Raha commercial group
                (rahabusiness.com) is a tourism company that delivers the most
                diverse amusement and traveling services with cooperation of big
                community of Iran tourism. By such services that are delivered
                to tourists for the first time in Iran, we enable you to travel
                based on your own taste and have attractive and memorable
                experiences.
              </p>
            </div>

            <div>
              <h4
                className={cn(
                  Messina_Serif,
                  " text-2xl font-semibold text-[#A07E62] py-4"
                )}
              >
                Link
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  Have your own trip
                </Link>
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  Tourism tour
                </Link>
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  Health tour
                </Link>
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  About us
                </Link>
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  Medical tour
                </Link>
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  Tourism tour
                </Link>
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  Persian store
                </Link>
                <Link className="text-[#594636] text-xs font-medium" href={"/"}>
                  Our Licenses
                </Link>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <h4
                className={cn(
                  Messina_Serif,
                  " text-2xl font-semibold text-[#A07E62] py-4"
                )}
              >
                Application
              </h4>

              <div className="flex  gap-4 py-4 px-4 bg-[#F6F6F6]">
                <Image src={PWA} alt="test" />
                <div className="grid w-full grid-cols-1">
                  <span className="text-black font-medium text-xs">
                    Open In
                  </span>
                  <span className="text-black font-semibold text-sm">
                    Web Application
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="bg-[#594636]/20 my-4" />
          <div className="flex mb-5 flex-col md:flex-row justify-between items-center">
            <div>
              <div className="flex gap-1 pb-2">
                <Image src={paypal} alt="paypal" />
                <Image src={master} alt="paypal" />
                <Image src={master1} alt="paypal" />
                <Image src={visa} alt="paypal" />
              </div>
              <p className=" text-[11px] text-[#594636] font-medium">
                © 2021 All rights reserved, including site and documentation,
                with this website.
              </p>
            </div>

            <div>
              <div className="flex gap-1 pb-2">
                <Button variant={"ghost"} size={"icon"}>
                  <Image src={facebook} alt="facebook" />
                </Button>

                <Button variant={"ghost"} size={"icon"}>
                  <Image src={instagram} alt="facebook" />
                </Button>

                <Button variant={"ghost"} size={"icon"}>
                  <Image src={inlogo} alt="facebook" />
                </Button>

                <Button variant={"ghost"} size={"icon"}>
                  <Image src={telegram} alt="facebook" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
