'use client'

import contactImg from "@/public/img/contact2.png";
import Image from "next/image";
import {ConsultationForm} from "./consultation-form";

const ContactForm = () => {
    return (
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <div className=" basis-full md:basis-1/3 order-2 md:order-1 ">
          <ConsultationForm />
        </div>
        <div className=" basis-full md:basis-2/3 order-1 md:order-2">
          <Image
            className=" object-cover w-full h-full md:max-h-[760px]"
            alt="contact"
            src={contactImg}
          />
        </div>
      </div>
    );
}
 

export default ContactForm;