"use client";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import { IR } from "country-flag-icons/react/3x2";

const Header = ({
  dictionary,
}: {
  dictionary: {
    Travel_yourself: string;
    Tourist_tour: string;
    Health_tour: string;
    Business_tour: string;
    Persian_Store: string;
    About_iran: string;
    About_us: string;
  };
}) => {
  return (
    <header>
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative  flex items-center justify-between h-[72px] border-0 md:border-b md:border-[#A07E621A] md:h-[114px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              test
            </button>
          </div>
          <div className="flex  flex-1  space-x-[30px] items-center justify-center md:justify-start ">
            <div className="flex flex-shrink-0 ">
              <Link href="/">
                <Image alt="logo" src={Logo} />
              </Link>
            </div>
            <div className=" hidden md:flex space-x-[30px]">
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={"/"}
              >
                <span>{dictionary.Travel_yourself}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={"/"}
              >
                <span>{dictionary.Tourist_tour}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={"/"}
              >
                <span>{dictionary.Health_tour}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={"/"}
              >
                <span>{dictionary.Business_tour}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={"/"}
              >
                <span>{dictionary.Persian_Store}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={"/"}
              >
                <span>{dictionary.About_iran}</span>
              </Link>
              <Link
                className=" transition-all font-medium text-[11px] hover:font-bold hover:text-[#594636]"
                href={"/"}
              >
                <span>{dictionary.About_us}</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-[30px]">
            <select className="block  border-none mt-1 bg-inherit focus:ring-0 ">
              <option>fa</option>
              <option>b</option>
              <option>c</option>
              <option>d</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
