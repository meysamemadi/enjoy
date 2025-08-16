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
            Work in IRAN
          </h2>
          <p className=" text-sm max-w-[450px] text-white">
            If you intend to study in Iran, Enjoy Persia will accompany you in
            all cities and credible cities throughout all stages of
            registration, education and residence (dormitory). Moreover, if you
            need a job for paying the costs of education, Enjoy Persia will help
            you for employment and income in accordance with your abilities
            alongside your study. Just send us a message.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
