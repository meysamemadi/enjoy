"use client"

import { useEffect, useState } from "react"
import { City } from "./city"
import { Collapse } from "./collapse"
import { PhotographerCarousel } from "./photographer-carousel"
import { toast } from "@/components/ui/use-toast"
import { useParams, useRouter } from "next/navigation"

export const PhotographerForm = ({ cities , photographers }: any) => {

    const [selectedCityId, setSelectedCityId] = useState<number | null>(null)
    const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([])
    const {lang} = useParams();
    const router = useRouter();

    const handleCitySelect = (cityId: number) => {
        setSelectedCityId((prevCityId) => (prevCityId === cityId ? null : cityId))
        setSelectedOptionIds([])
    }

    const handleOptionToggle = (optionId: number) => {
        setSelectedOptionIds((prev) => {
            if (prev.includes(optionId)) {
                return prev.filter((id) => id !== optionId)
            } else if (prev.length < 3) {
                return [...prev, optionId]
            }
            return prev
        })
    }

    const handleSubmit = () => {
        if (selectedCityId && selectedOptionIds.length >= 1 && selectedOptionIds.length <= 3) {
            const selectedCity = cities.find((city:any) => city.id === selectedCityId)
           
            const selectedOptions = photographers.filter((option:any) => selectedOptionIds.includes(option.id))
           
             // Create the query string
             const photographerIds = selectedOptionIds.join(',')
             const url = `/${lang}/have-your-own-trip/reservation-of-tour?city=${selectedCityId}&photographers=${photographerIds}`
             
             // Navigate to the constructed URL
             router.push(url)
        }
    }

   

    // Filter photographers based on selectedCityId
    const filteredPhotographers = selectedCityId
        ? photographers.filter((photographer: any) => 
              photographer.cities.some((city: any) => city.id === selectedCityId)
          )
        : photographers

    const isFormValid = selectedCityId && selectedOptionIds.length >= 1 && selectedOptionIds.length <= 3

    return (
        <>
            <City handleCitySelect={handleCitySelect} selectedCityId={selectedCityId} cities={cities} />

            <div className="container ">
                <div className="p-4 md:p-[32px] bg-white">
                    <div >
                        <Collapse />
                        <PhotographerCarousel handleSubmit={handleSubmit} selectedOptionIds={selectedOptionIds} handleOptionToggle={handleOptionToggle} photographers={filteredPhotographers} isFormValid={isFormValid} />
                    </div>
                </div>
            </div>
        </>
    )
}
