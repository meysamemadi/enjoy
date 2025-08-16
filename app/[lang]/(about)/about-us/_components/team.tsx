import { brand, montserrat } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import userPic from "@/public/img/base/pic.png"


interface Employees {
    name: string;
    job: string;
    profile: string;
}

interface TeamProps {

    right?: boolean
    title: string;
    subtitle: string;
    color: string;
    employees: Employees[]

}


export const User = ({ name, job, profile }: Employees) => {

    return (
        <div className=" flex flex-col items-center justify-center w-full   max-w-[164px]   ">
            <div className=" h-[56px] w-full flex items-center justify-center  relative" >
                <Image className=" absolute -bottom-6  w-[56px] h-[56px] " width={56} height={56} alt={name} src={userPic} />
            </div>
            <div className=" bg-white w-full text-center pb-4  pt-4">
                <p className="mt-4 text-sm font-bold text-[#594636] uppercase ">{name}</p>
                <p className={cn(montserrat.className, " text-[10px] font-medium leading-[190%]")}>{job}</p>
            </div>
        </div>
    )
}


export const Team = ({ right, title, subtitle, color, employees }: TeamProps) => {
    return (

        <div className=" relative">
            <div className={cn("flex flex-col lg:flex-row gap-6 max-w-[728px] mx-auto justify-end items-center ", right ? "lg:flex-row-reverse" : "")}>
                <div className=" w-full lg:w-1/2 relative p-6">



                    <h2 className={cn(brand.className, " text-[32px] lg:text-[56px] font-normal leading-[normal]", ` text-[${color}]`)}>
                        {title}
                    </h2>
                    <h2 className={cn(brand.className, "text-[48px] lg:text-[80px] uppercase font-normal", ` text-[${color}]`)}>
                        {subtitle}
                    </h2>


                    <div className={cn(`absolute border-2  w-[142px] h-[142px]  top-0  left-0 opacity-5 z-[9999]`, `bg-[${color}]`)}></div>


                </div>

                <div className=" w-full lg:w-1/2">
                    <div className=" grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6">
                        {employees && employees.map((item, index) => {
                            return <User key={index} name={item.name} job={item.job} profile={item.profile} />
                        })}
                    </div>

                </div>
            </div>
        </div>

    )
}
