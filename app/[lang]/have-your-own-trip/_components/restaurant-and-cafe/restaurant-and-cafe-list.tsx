import React from "react";
import PaginationComponent from "./pagination-component";
import { RestaurantItem } from "../restaurant-item";

export const RestaurantAndCafeList = ({ restaurants }: any) => {
  return (
    <div className=" container mt-6">
      <div className="grid grid-cols-2 gap-4 md:gap-6">

        {
          restaurants.items.map((restaurant: any) =>
            <RestaurantItem
              key={restaurant.id}
              {...restaurant}
            />)
        }




      </div>
      <div className='flex justify-center w-ful'>
        <PaginationComponent totalPages={restaurants.pagination.pageCount} />
      </div>
    </div>
  );
};
