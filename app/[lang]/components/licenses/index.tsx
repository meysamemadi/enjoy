import Title from "../title"
import { LicensesItem } from "./licenses-item"
import azadImg from "@/public/img/azad_uni.png"
import techImg from "@/public/img/tech-ministry.svg"
import medImg from "@/public/img/medical-ministry.svg"
import rahaImg from "@/public/img/raha-img.svg"

export const Licenses = () => {
    return (
        <div>
            <Title title="Our licenses" />

            <div className="container grid md:grid-cols-2 gap-4 py-4">

                <LicensesItem
                    name="Azad University of Iran"
                    image={azadImg.src}
                    width={36}
                    height={64}
                />

                <LicensesItem
                    name="Ministry of science, research and technology of Iran"
                    image={techImg.src}
                    width={64}
                    height={64}
                />

                <LicensesItem
                    name="Raha commercial group"
                    image={rahaImg.src}
                    width={75}
                    height={75}
                />

                <LicensesItem
                    name="Ministry of Health and Medical Education"
                    image={medImg.src}
                    width={76}
                    height={62}
                />

            </div>
        </div>
    )
}
