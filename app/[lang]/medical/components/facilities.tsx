'use client'

import Facility from "./facility";
import {
  RiCustomerServiceFill,
  RiHistoryLine,
  RiShieldCheckFill,
  RiFlightLandLine,
  RiHomeHeartFill,
  RiVipFill,
  RiUserHeartFill,
  RiHeartPulseFill,
  RiPhoneFill,
} from "react-icons/ri";

import { BsFillPersonVcardFill } from "react-icons/bs";

const Facilites = () => {
    return (
      <div className="container">
        <div className="bg-white grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-x-6 md:gap-y-0">
          <Facility name={"online suppott"} icon={RiCustomerServiceFill} />
          <Facility name={"trip planning"} icon={RiHistoryLine} />
          <Facility name={"insurance and guarantee"} icon={RiShieldCheckFill} />
          <Facility name={"Medical Visa"} icon={BsFillPersonVcardFill} />
          <Facility name={"airport pickup"} icon={RiFlightLandLine} />
          <Facility name={"accommodations"} icon={RiHomeHeartFill} />
          <Facility name={"VIP hospital services"} icon={RiVipFill} />
          <Facility name={"24-hours patient care"} icon={RiUserHeartFill} />
          <Facility name={"recovery"} icon={RiHeartPulseFill} />
          <Facility name={"keep contract with doctor"} icon={RiPhoneFill} />
        </div>
      </div>
    );
}
 
export default Facilites;