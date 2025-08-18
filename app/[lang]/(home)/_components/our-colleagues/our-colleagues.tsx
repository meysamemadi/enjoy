import Title from "@/app/[lang]/components/title"
import {ColleaguesCarousel} from "./colleagues-carousel";
import {getBanner} from "@/actions/base";

export const OurColleagues = async () => {

    const banners = await getBanner()
    return (
        <div>
            <Title title="Our Colleagues"/>
            <ColleaguesCarousel banners={banners.items} />
        </div>
    );
}
