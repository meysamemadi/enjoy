import React, { useState } from "react";

import US from "@/public/img/flag/US - United States.png";
import CN from "@/public/img/flag/CN - China.png";
import RU from "@/public/img/flag/RU - Russian Federation.png";
import TR from "@/public/img/flag/TR - Turkey.png";
import IR from "@/public/img/flag/IR - Iran.png";
import DE from "@/public/img/flag/DE - gernammny.png";
import SA from "@/public/img/flag/SA - Saudi Arabia.png";
import { useParams, usePathname, useRouter } from "next/navigation";


const options = [
  { value: "en", label: "english", image: US.src },
  { value: "tr", label: "turky", image: TR.src },
  { value: "ar", label: "turky", image: SA.src },
  // Add more options as needed
];

const CustomDropdown = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

    const pathName = usePathname();
      const router = useRouter();
      const params = useParams();
      const lang = params.lang;

      const index = options.findIndex((obj) => obj.value === lang);
      let defaultLang = 0;

      if (index !== -1) {
        defaultLang = index;
      }

        const [selectedOption, setSelectedOption] = useState(
          options[defaultLang]
        );



      


    const redirectedPathName = (locale: string) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    router.push(redirectedPathName(option.value));
  };

  return (
    <div className="relative w-fit">
      <div
        className="p-2 flex items-center justify-between cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          src={selectedOption.image}
          alt={selectedOption.label}
          className="w-6 h-[18xp] "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className={`h-[24px] w-[24px] transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#594636"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isDropdownOpen && (
        <ul className="absolute z-[90] mt-2 py-2 bg-white border border-gray-300 rounded w-full shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              <img
                src={option.image}
                alt={option.label}
                className="w-6 h-6 mr-2"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
