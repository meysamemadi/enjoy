import Title from "@/app/[lang]/components/title";
import { Item } from "./item";
import img1 from "@/public/img/base/k1.jpg"
import { KnowIranCarousel } from "./know-iran-carousel";

export const KnowIranBetter = () => {
  return (
    <div>
      <Title title="Know Iran better" />
      <div className=" hidden md:block mt-4 md:mt-8 lg:mt-[40px] container">
        <div className="grid grid-cols-4 gap-4 lg:gap-6">
          <Item id={1} name="foods" image={img1.src} />
          <Item id={1} name="foods" image={img1.src} />
          <Item id={1} name="foods" image={img1.src} />
          <Item id={1} name="foods" image={img1.src} />
          <Item id={1} className=" col-span-2" name="foods" image={img1.src} />
          <Item id={1} className=" col-span-2" name="foods" image={img1.src} />
          <Item id={1} name="foods" image={img1.src} />
          <Item id={1} name="foods" image={img1.src} />
          <Item id={1} name="foods" image={img1.src} />
          <Item id={1} name="foods" image={img1.src} />
        </div>
      </div>
      <KnowIranCarousel />
    </div>
  );
};
