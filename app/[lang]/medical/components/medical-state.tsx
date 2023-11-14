import Image from "next/image";
import bg_hero from "@/public/img/medical-hero.png";
import { cn } from "@/lib/utils";
import { Messina_Serif } from "../../font";
import { CiStethoscope } from "react-icons/ci";
import {
  RiHospitalLine,
  RiDossierLine,
  RiRoadMapLine,
  RiUserLine,
  RiCapsuleLine,
} from "react-icons/ri";

const MedicalState = ({
  dictionary,
}: {
  dictionary: {
    Enjoy_Persia_health_care_global_network: string;
    Enjoy_Persia_health_care_global_network_description: string;
    Doctors: string;
    Hospitals: string;
    Cities: string;
    Employees: string;
    Clinics: string;
    Pharmacies: string;
  };
}) => {
  return (
    <div className=" relative w-full h-full min-h-[110px] md:min-h-[720px]">
      <Image
        className=" absolute inset-0  w-full h-full object-cover object-bottom "
        alt=""
        src={bg_hero}
      />
      <div className=" px-[18px] md:px-0 py-8 md:py-16 lg:py-28 md:absolute  inset-0 w-full h-full flex items-center justify-center">
        <div className=" container grid grid-cols-1 md:grid-cols-2 z-[9999] gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
          <div className="bg-[#43B8A2] p-4 lg:p-6 xl:p-8">
            <h3
              className={cn(
                " text-[44px] text-white font-bold",
                Messina_Serif.className
              )}
            >
              {dictionary.Enjoy_Persia_health_care_global_network}
            </h3>
            <p
              className={cn(
                Messina_Serif.className,
                "mt-4 md:mt-6 lg:mt-8 font-semibold text-white capitalize leading-[160%]"
              )}
            >
              {dictionary.Enjoy_Persia_health_care_global_network_description}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-[#43B8A2] p-4 flex flex-col justify-start gap-1 md:gap-[6px]">
              <CiStethoscope className=" text-white/60 w-12 h-12" />
              <span
                className={cn(
                  " text-[40px] font-bold text-white capitalize",
                  Messina_Serif.className
                )}
              >
                +2998
              </span>
              <p
                className={cn(
                  Messina_Serif.className,
                  "font-semibold text-lg text-white"
                )}
              >
                {dictionary.Doctors}
              </p>
            </div>

            <div className="bg-[#43B8A2] p-4 flex flex-col justify-start gap-1 md:gap-[6px]">
              <RiHospitalLine className=" text-white/60 w-12 h-12" />
              <span
                className={cn(
                  " text-[40px] font-bold text-white capitalize",
                  Messina_Serif.className
                )}
              >
                +25
              </span>
              <p
                className={cn(
                  Messina_Serif.className,
                  "font-semibold text-lg text-white"
                )}
              >
                {dictionary.Hospitals}
              </p>
            </div>

            <div className="bg-[#43B8A2] p-4 flex flex-col justify-start gap-1 md:gap-[6px]">
              <RiDossierLine className=" text-white/60 w-12 h-12" />
              <span
                className={cn(
                  " text-[40px] font-bold text-white capitalize",
                  Messina_Serif.className
                )}
              >
                116+
              </span>
              <p
                className={cn(
                  Messina_Serif.className,
                  "font-semibold text-lg text-white"
                )}
              >
                {dictionary.Clinics}
              </p>
            </div>

            <div className="bg-[#43B8A2] p-4 flex flex-col justify-start gap-1 md:gap-[6px]">
              <RiRoadMapLine className=" text-white/60 w-12 h-12" />
              <span
                className={cn(
                  " text-[40px] font-bold text-white capitalize",
                  Messina_Serif.className
                )}
              >
                8+
              </span>
              <p
                className={cn(
                  Messina_Serif.className,
                  "font-semibold text-lg text-white"
                )}
              >
                {dictionary.Cities}
              </p>
            </div>

            <div className="bg-[#43B8A2] p-4 flex flex-col justify-start gap-1 md:gap-[6px]">
              <RiUserLine className=" text-white/60 w-12 h-12" />
              <span
                className={cn(
                  " text-[40px] font-bold text-white capitalize",
                  Messina_Serif.className
                )}
              >
                116+
              </span>
              <p
                className={cn(
                  Messina_Serif.className,
                  "font-semibold text-lg text-white"
                )}
              >
                {dictionary.Employees}
              </p>
            </div>

            <div className="bg-[#43B8A2] p-4 flex flex-col justify-start gap-1 md:gap-[6px]">
              <RiCapsuleLine className=" text-white/60 w-12 h-12" />
              <span
                className={cn(
                  " text-[40px] font-bold text-white capitalize",
                  Messina_Serif.className
                )}
              >
                236+
              </span>
              <p
                className={cn(
                  Messina_Serif.className,
                  "font-semibold text-lg text-white"
                )}
              >
                {dictionary.Pharmacies}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalState;
