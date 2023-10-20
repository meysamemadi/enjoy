"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";
import { useState } from "react";
import US from "@/public/img/flag/US - United States.png";
import CN from "@/public/img/flag/CN - China.png";
import RU from "@/public/img/flag/RU - Russian Federation.png";
import TR from "@/public/img/flag/TR - Turkey.png";
import IR from "@/public/img/flag/IR - Iran.png";
import DE from "@/public/img/flag/DE - gernammny.png";
import SA from "@/public/img/flag/SA - Saudi Arabia.png";
import Image from "next/image";
import CustomDropdown from "./CustomDropdown";
import { HomeIcon } from "lucide-react";

export default function LocaleSwitcher() {

  return (
    <div>
      <CustomDropdown />
    </div>
  );
}
