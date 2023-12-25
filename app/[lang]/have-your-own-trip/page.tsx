import { Locale } from "@/i18n-config";
import { Header } from "./_components/Header";
import { getDictionary } from "@/get-dictionary";
import BreadCrumb from "../components/breadcrumb";
import style from "@/app/[lang]/styles/owntrip.module.css"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Messina_Serif } from "../font";
import { Button } from "@/components/ui/button";
import Link from "next/link";


import { RiUser2Fill , RiCamera2Fill , RiCarFill , RiHotelFill , RiRestaurantFill  , RiShoppingCart2Fill} from "react-icons/ri";
import { Category } from "./_components/category";
import cta1 from "@/public/img/haveyorowntrip/c1.jpg";
import cta2 from "@/public/img/haveyorowntrip/c2.jpg";
import cta3 from "@/public/img/haveyorowntrip/c3.jpg";
import cta4 from "@/public/img/haveyorowntrip/c4.jpg";
import cta5 from "@/public/img/haveyorowntrip/c5.png";
import cta6 from "@/public/img/haveyorowntrip/c6.jpg";
import { Photographer } from "./_components/photographer/photographer";
import { Accommodations } from "./_components/accommodations/accommodations";
import { RestaurantAndCafe } from "./_components/restaurant-and-cafe/restaurant-and-cafe";
import { State } from "./_components/state/state";
import { TravelCheap } from "./_components/travel-cheap/travel-cheap";
import { Locations } from "./_components/locations/locations";
import { Music } from "./_components/music/music";
import { Stores } from "./_components/stores/stores";


const HaveYourOwnTrip = async ({
  params: { lang },
}: {
  params: { lang: Locale};
}) => {

  const pages = [{ name: "Have Your Own Trip", href: "", current: true }];
  const dic = await getDictionary(lang);
  return (
    <div className="flex-1  bg-[#FAF5EF]">
      <BreadCrumb pages={pages} />
      <Header dictionary={dic["have_your_own_trip"]} />
      <div className={cn("container mt-[48px] md:mt-[80px] ", style.bg_trip)}>
        <div
          className={cn(
            style.vip_header,
            " aspect-[1/2] md:aspect-video relative flex w-full md:max-h-[334px] content-['']"
          )}
        >
          <div className=" absolute bottom-[5%] p-4 md:bottom-auto top-auto md:top-[10%]  md:left-[10%]  z-20">
            <h2
              className={cn(
                "text-white text-[32px] md:text-[52.5px] uppercase font-bold",
                Messina_Serif.className
              )}
            >
              vip+
            </h2>
            <p className="max-w-[500px] text-white font-medium md:font-semibold leading-[160%] text-sm">
              You can travel comfortably to Iran with your family and friends
              and even alone. We will accompany you in every step and provide
              you with everything you need in any city and place.
            </p>

            <Button
              className=" bg-inherit border border-white rounded-none mt-2 md:mt-6"
              asChild
            >
              <Link href={""}>tell us</Link>
            </Button>
          </div>
          <div className=" hidden md:block md:w-[40%]"></div>
          <div className={cn(style.vip_test, "h-full w-full md:w-[60%]")}></div>
        </div>
        <div className=" my-[48px] md:my-[80px] grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          <Category
            name="Reservation of tour leader and interpreter"
            icon={RiUser2Fill}
            image={cta1.src}
          />

          <Category
            name="Reservation of photographer and cameraman"
            icon={RiCamera2Fill}
            image={cta2.src}
          />

          <Category
            name="Reservation of driver"
            icon={RiCarFill}
            image={cta3.src}
          />

          <Category
            name="Reservation of accommodation"
            icon={RiHotelFill}
            image={cta4.src}
          />

          <Category
            name="Reservation of restaurant and cafe"
            icon={RiRestaurantFill}
            image={cta5.src}
          />

          <Category
            name="Rent and purchase equipment"
            icon={RiShoppingCart2Fill}
            image={cta6.src}
          />
        </div>
      </div>
      <Photographer />
      <Accommodations />
      <div className="container my-[48px] lg:my-[80px]">
        <div
          className={cn(
            "  aspect-[1/1.4] md:aspect-video  md:max-h-[400px] w-full h-full",
            style.one_day_tour_header
          )}
        >
          <div className=" w-full h-full  z-40 absolute flex flex-col gap-4 md:gap-6 justify-end inset-0 p-6 md:py-[62px] md:px-[70px] ">
            <h2
              className={cn(
                "text-white capitalize font-semibold text-[40px] md:text-[48px] md:max-w-[324px]",
                Messina_Serif.className
              )}
            >
              One day tours
            </h2>
            <p className="text-white text-base leading-[24px] md:max-w-[391px] font-semibold">
              If you are in cities of Iran, you can experience our attractive
              one-day tours besides your main tour or the purpose you have
              traveled for
            </p>
            <Link
              className="py-3 px-[30px] md:px-[20px] border border-white font-semibold text-sm text-[#594636] w-fit md:text-white bg-white md:bg-inherit"
              href={""}
            >
              Choose a Tour
            </Link>
          </div>
        </div>
      </div>
      <RestaurantAndCafe />
      <State />
      <TravelCheap />
      <Locations />
      <Music />
      <div className=" my-12 md:mt-[80px] md:mb-8 flex flex-col gap-6 items-center justify-center text-center">
        <h4
          className={cn(
            " text-lg md:text-[46px] text-[#594636] font-semibold leading-[85.2%]",
            Messina_Serif.className
          )}
        >
          Rent and purchase equipment
        </h4>
        <p className="text-sm leading-[200%] font-medium max-w-[728px] text-[#594636]">
          Enjoy Persia can buy or even rent various facilities for you in all
          cities in Iran. See the features below and then fill out the form at
          the bottom of the page.
        </p>

        <Button className="bg-[#F07148] py-4 px-[48px] font-bold rounded-none text-base text-[#FAF7F5] capitalize leading-[85.2%]">
          Get in touch
        </Button>
      </div>

      <Stores />

    </div>
  );
};
 
export default HaveYourOwnTrip;