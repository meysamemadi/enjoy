"use client";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import { IR } from "country-flag-icons/react/3x2";
import LocaleSwitcher from "../locale-switcher";
import MobileNavbar from "../mobile-navbar"
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { UserButton } from "./user-button";
import { ShoppingBag } from "lucide-react";

const Header = ({
  dictionary,
  bgNone
}: {
  dictionary: {
    Travel_yourself: string;
    Tourist_tour: string;
    Health_tour: string;
    Business_tour: string;
    Persian_Store: string;
    About_iran: string;
    About_us: string;
    Register: string;
    Login: string;
  };
  bgNone?:boolean
}) => {


  const params = useParams();
  const lang = params.lang;

  const pathname = usePathname()

  const showShoppingBag = pathname?.startsWith('/en/persian-store')


  let right = false;

  if (lang === "ar") {
    right = true;
  }


  return (
    <header className={cn(bgNone ? "bg-none" : "bg-inherit")}>
      <div className="container mx-auto   ">
        <div className="relative  flex items-center justify-between h-[72px] border-0 md:border-b md:border-[#A07E621A] md:h-[114px]">
          <div
            className={cn(
              "absolute inset-y-0  flex items-center sm:hidden",
              right ? "right-0" : "left-0"
            )}
          >
            <MobileNavbar dictionary={dictionary} />
          </div>
          <div
            className={cn(
              "absolute inset-y-0  flex items-center sm:hidden",
              right ? "left-0" : "right-0"
            )}
          >
            <Button
              variant={"outline"}
              className=" bg-inherit border-[#A07E6280] text-[11px] text-[#594636] rounded-none"
              asChild
            >
              <Link href={`/${lang}/auth/signup`}>{dictionary.Register}</Link>
            </Button>
          </div>
          <div className="flex  flex-1  space-x-[30px] items-center justify-center md:justify-start ">
            <div className="flex flex-shrink-0 ">
              <Link href={`/${lang}`}>
                <Image alt="enjoy Persian" src={Logo} />
              </Link>
            </div>
            <div className=" hidden md:flex space-x-[30px]">
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={`/${lang}/have-your-own-trip`}
              >
                <span>{dictionary.Travel_yourself}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={`/${lang}/tourism`}
              >
                <span>{dictionary.Tourist_tour}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={`/${lang}/medical`}
              >
                <span>{dictionary.Health_tour}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={`/${lang}/bussiness`}
              >
                <span>{dictionary.Business_tour}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={`/${lang}/persian-store`}
              >
                <span>{dictionary.Persian_Store}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={`/${lang}/about-iran`}
              >
                <span>{dictionary.About_iran}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={`/${lang}/about-us`}
              >
                <span>{dictionary.About_us}</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-[30px]">
            <LocaleSwitcher />
            <UserButton dictionary={dictionary} />
          </div>
          <div className="hidden md:flex items-center">
            {showShoppingBag && (
              <Link href="/en/persian-store/cart" className="text-gray-600 hover:text-gray-800 p-2 rounded-md">
                <ShoppingBag className="h-6 w-6" />
                <span className="sr-only">Shopping Bag</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
