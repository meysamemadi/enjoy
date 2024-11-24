import Title from "@/app/[lang]/components/title"
import { RestaurantItem } from "../../../_components/restaurant-item"

export const Restaurants = ({ restaurants }: any) => {
    return (
        <>
            <Title title="Restaurant" />

            <div className=" container grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 w-full h-full">
                {
                    restaurants.items.map((restaurant: any) =>
                        <RestaurantItem
                            key={restaurant.id}
                            {...restaurant}
                        />)
                }
            </div>
        </>
    )
}
