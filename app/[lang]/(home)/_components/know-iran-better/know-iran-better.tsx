import Title from "@/app/[lang]/components/title";
import { Item } from "./item";
import img1 from "@/public/img/base/k1.jpg"
import { KnowIranCarousel } from "./know-iran-carousel";
import {Locale} from "@/i18n-config";
import {IranBetter} from "@/actions/base";


type CardItem = {
    id: number;
    name: string;
    description: string;
    image: string;  // url نهایی تصویر
    status?: string;
};

export  const KnowIranBetter = async ({ lang }:{lang:Locale}) => {


    const data = await IranBetter (lang );
    const layout = (i: number) => (i === 4 || i === 5 ? "col-span-2" : "");

  return (
    <div>
      <Title title="Know Iran better" />
      <div className=" hidden md:block mt-4 md:mt-8 lg:mt-[40px] container">
        <div className="grid grid-cols-4 gap-4 lg:gap-6">

            {data.items.map((item:CardItem, idx:number) => (
                <Item
                    key={item.id}
                    id={item.id}                         // به‌جای عدد ثابت
                    name={item.name ?? "Untitled"}
                    image={item.image ?? "/img/base/k1.jpg"} // fallback اگر تصویر نبود
                    className={layout(idx)}
                />
            ))}

          {/*<Item id={1} name="foods" image={img1.src} />*/}
          {/*<Item id={1} name="foods" image={img1.src} />*/}
          {/*<Item id={1} name="foods" image={img1.src} />*/}
          {/*<Item id={1} className=" col-span-2" name="foods" image={img1.src} />*/}
          {/*<Item id={1} className=" col-span-2" name="foods" image={img1.src} />*/}
          {/*<Item id={1} name="foods" image={img1.src} />*/}
          {/*<Item id={1} name="foods" image={img1.src} />*/}
          {/*<Item id={1} name="foods" image={img1.src} />*/}
          {/*<Item id={1} name="foods" image={img1.src} />*/}
        </div>
      </div>
      <KnowIranCarousel />
    </div>
  );
};
