'use client'

import Service from "./service";

const SpecialServices = () => {
    return (
      <div className="container mt-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    );
}
 
export default SpecialServices;