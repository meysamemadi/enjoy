import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import bg_edcational_form from "@/public/img/bg-edcational-form.png"
import Image from "next/image";


const Header = () => {
  return (
    <div className="container">
      <section className="edcational-form  flex flex-wrap   relative min-h-full    md:min-h-[448px] after:h-full after:w-full after:absolute after:inset-0 ">
        <div className="flex md:hidden h-56">
          <Image
            className="w-full h-full object-cover"
            alt=""
            src={bg_edcational_form}
          />
        </div>
        <div className="md:absolute inset-0 z-10 px-8 md:px-12 lg:px-20 py-5 md:py-10 lg:py-16 ">
          <h2
            className={cn(
              Messina_Serif.className,
              "  text-2xl  md:text-4xl lg:text-[46px] text-white font-bold mb-2 md:mb-4"
            )}
          >
            Educational tours
          </h2>
          <p className=" text-sm max-w-[450px] text-white">
            Enjoy Persia has the ability to make all intersted people,
            instructors and students of all universities of the world experience
            the most unique scientific and educational trips. Such trips include
            tours on Iranian architecture, historiology, environment, industries
            and mines, cultural studies, instruction of handicrafts in the
            Middle East and all other tours combined with science and industry
            and art. It is enough to send us a message.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
