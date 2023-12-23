import Image from "next/image";
import mountains from "@/public/img/haveyorowntrip/state_bg.jpg"
import style from "@/app/[lang]/styles/owntrip.module.css"
import { cn } from "@/lib/utils";
import { Messina_Serif } from "@/app/[lang]/font";
import { StateItem } from "./state-item";
import { RiBikeLine, RiBuilding4Line, RiCamera2Line, RiCamera3Line, RiCarLine, RiMap2Line, RiRestaurantLine, RiUserVoiceLine } from "react-icons/ri";
export const State = () => {
  return (
    <div
      className={cn(
        "my-[48px] md:my-[70px] lg:my-[80px] min-h-[900px] relative"
      )}
    >
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <div className=" relative container py-[20px] md:pt-[60px] lg:pt-[90px] space-y-4 md:space-y-6 z-10">
        <div className="bg-black/50 text-white p-[32px] space-y-4 md:space-y-[32px]">
          <h2
            className={cn(
              "text-[44px] font-bold capitalize leading-normal",
              Messina_Serif.className
            )}
          >
            Be Marco Polo
          </h2>
          <p
            className={cn(
              "font-semibold capitalize leading-[160%]",
              Messina_Serif.className
            )}
          >
            Enjoy Persia in &quot;have your own trip&quot; section provides the
            most high-quality and unique services and the most qualified tourism
            staff. It enables you to determine your trip route according to your
            own taste like tourists of previous centuries, have the best tour
            guides and tourism facilities through the big and specialist team of
            Enjoy Persia without any concern.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StateItem name="Province of Iran" counter="31" icon={RiMap2Line} />

          <StateItem
            name="Tour leaders and interpreters"
            counter="100+"
            icon={RiUserVoiceLine}
          />

          <StateItem
            name="Photographers and videographers"
            counter="100+"
            icon={RiCamera2Line}
          />
          <StateItem name="Hotles" counter="100+" icon={RiBuilding4Line} />

          <StateItem name="Eco-lodges" counter="100+" icon={RiCamera3Line} />
          <StateItem
            name="Restaurants and cafes"
            counter="100+"
            icon={RiRestaurantLine}
          />
          <StateItem name="Drivers" counter="100+" icon={RiCarLine} />
          <StateItem
            name="Rent and purchase of equipment"
            counter="100+"
            icon={RiBikeLine}
          />
        </div>
      </div>
    </div>
  );
}
