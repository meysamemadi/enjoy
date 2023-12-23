import React from "react";
import { CafeRestaurantItem } from "./cafe-restaurant-item";

export const RestaurantAndCafeList = () => {
  return (
    <div className=" container mt-6">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <CafeRestaurantItem
          title="Hezaar Cafe"
          city="tehran, tehran"
          items={["breakfast", "Food", "ice-cream", "cake"]}
        />
        <CafeRestaurantItem
          title="Hezaar Cafe"
          city="tehran, tehran"
          items={["breakfast", "Food", "ice-cream", "cake"]}
        />
        <CafeRestaurantItem
          title="Hezaar Cafe"
          city="tehran, tehran"
          items={["breakfast", "Food", "ice-cream", "cake"]}
        />
        <CafeRestaurantItem
          title="Hezaar Cafe"
          city="tehran, tehran"
          items={["breakfast", "Food", "ice-cream", "cake"]}
        />
        <CafeRestaurantItem
          title="Hezaar Cafe"
          city="tehran, tehran"
          items={["breakfast", "Food", "ice-cream", "cake"]}
        />
        <CafeRestaurantItem
          title="Hezaar Cafe"
          city="tehran, tehran"
          items={["breakfast", "Food", "ice-cream", "cake"]}
        />
      </div>
    </div>
  );
};
