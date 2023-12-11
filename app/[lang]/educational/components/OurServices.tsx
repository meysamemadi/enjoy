import { cn } from '@/lib/utils';
import React from 'react'
import { Messina_Serif } from '../../font';
import e_c from "@/public/img/educational_counseling.png"
import u_r from "@/public/img/university_registration.png"
import a_t from "@/public/img/airplane_ticket.png"
import o_b from "@/public/img/opening_a_bank_account.png"

import a_a from "@/public/img/accommodation_and_dormitory.png"
import t_a from "@/public/img/thesis_affairs.png"
import v_t from "@/public/img/vip_tourism.png"
import v_h from "@/public/img/vip_health.png"
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from '../../components/motion';


const OurServices = () => {
  return (
    <div className=" container">
      <div className="py-2">
        <div className=" py-2 border-b border-[#A07E624D]/30">
          <span
            className={cn(
              "text-lg md:text-[32px] font-semibold text-[#A07E62]",
              Messina_Serif.className
            )}
          >
            Our Services
          </span>
        </div>
        <div className=" py-4 mt-4 md:mt-10 justify-center text-center bg-white grid grid-cols-3 md:grid-cols-4">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={e_c} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              Educational Counseling
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={u_r} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              University Registration
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={a_t} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              Airplane Ticket
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={o_b} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              Opening a Bank Account
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={a_a} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              Accommodation and Dormitory
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={t_a} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              Thesis/Dissertation Affairs
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={v_t} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              VIP- Tourism and Recreation
            </Link>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center "
          >
            <Image src={v_h} alt="Educational Counseling" />
            <Link
              href={"/"}
              className="text-[10px] md:text-[14px] font-bold mt-[11px] mb-[13px] md:mt-4 md:mb-6"
            >
              VIP- Health Tourism
            </Link>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}

export default OurServices