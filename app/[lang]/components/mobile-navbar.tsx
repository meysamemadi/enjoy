import { ChevronLeft, Facebook, Menu, MoveLeft } from "lucide-react";
import { ImWhatsapp, ImTelegram } from "react-icons/im";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {useRouter , useParams} from "next/navigation"
import Link from "next/link"
import CustomDropdown from "./CustomDropdown";
import { Separator } from "@/components/ui/separator";

const MobileNavbar = ({
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
  const params = useParams();
  const lang = params.lang;
  let right = false;

  if (lang === "ar") {
    right = true;
  }

  return (
    <Sheet>
      <SheetTrigger className="md:hidden relative pr-4 hover:opacity-75 transition">
        <Menu size={24} className="w-[24px] h-[24px] text-[#A98D69]" />
      </SheetTrigger>
      <SheetContent
        side={right ? "right" : "left"}
        className="px-4 py-8 bg-white"
      >
        <div className="flex justify-between items-center py-4 ">
          <Link
            className=" text-black font-medium text-[13px]"
            href={`${lang}/login`}
          >
            Login
          </Link>
          <Link
            className=" text-black font-medium text-[13px]"
            href={`${lang}/register`}
          >
            Register
          </Link>
          <CustomDropdown />
        </div>
        <Separator className="bg-[#FAF5EF]" />
        <div className="flex flex-col gap-6 pt-6">
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
        <div className="flex flex-col gap-2 mt-2">sssss</div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
