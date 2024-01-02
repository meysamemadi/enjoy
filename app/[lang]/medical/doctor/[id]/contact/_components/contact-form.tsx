'use client'

import contactImg from "@/public/img/medical/contact.png";
import Image from "next/image";
import {ConsultationForm} from "./consultation-form";

const ContactForm = () => {
    return (
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <div className=" w-full md:w-[40%] order-2 md:order-1 ">
          <ConsultationForm />
        </div>
        <div className="aspect-[1/1.2] w-full md:w-[60%]  order-1 md:order-2">
          <Image
            className=" aspect-[1/1.2] object-cover w-full h-full md:max-h-[760px]"
            alt="contact"
            src={contactImg}
          />
        </div>
      </div>
    );
}
 

export default ContactForm;