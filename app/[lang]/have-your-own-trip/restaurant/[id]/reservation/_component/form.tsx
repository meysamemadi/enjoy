"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Calendar } from "@/components/ui/calendar"
import checkImg from "@/public/img/haveyorowntrip/check.png"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { createRestaurantReservation } from "@/actions/have-your-own-trip/form"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

const formSchema = z.object({
    first_name: z.string().min(2).max(155),
    last_name: z.string().min(2).max(155),
    country: z.string().min(2).max(150),
    gender: z.string().min(2).max(150),
    phone_number: z.string().min(2).max(150),
    email: z.string().min(2).max(150),
    number_of_members: z.string().min(2).max(150),
    number_of_childeren: z.string().min(2).max(150),

    start_date: z.date({
        required_error: "A start date is required.",
    }),
    end_date: z.date({
        required_error: "A end_date is required.",
    }),
    description: z.string().min(2).max(150),
})

export const VipForm = () => {

    const { lang } = useParams();

    const [formSuccess, setFormSuccess] = useState(false);
    const [formId , setFormId] = useState(null)


    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            country: "",
            gender: "",
            phone_number: "",
            email: "",
            number_of_members: "",
            number_of_childeren: "",
            start_date: undefined,
            end_date: undefined,

            description: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        createRestaurantReservation(values).then((res: any) => {
            setFormSuccess(res.status)
            setFormId(res.message)
        }).catch((error) => console.log(error))
    }


    if (formSuccess) {
        return (
            <div className="flex h-full flex-col items-center justify-center mt-6 gap-6 max-w-[352px] mx-auto">

                <Image alt="" src={checkImg} />

                <div className=" py-3 md:py-[14px] px-4 md:px-6 flex justify-between bg-[#F8F3EF] text-[#594636] w-full items-center">
                    <span>Tracking Code : </span>
                    <span className=" font-bold text-sm "> {formId} </span>
                </div>

                <p className=" text-center font-medium text-[#594636] ">
                    Thanks for registering your information, we will contact you soon.
                </p>

                <Link className="bg-[#F07148] text-[#FAF7F5] capitalize py-4 px-10 md:px-12 font-bold" href={`/${lang}/have-your-own-trip`}>
                    back to have your own trip
                </Link>

            </div>
        )
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5 ">

                <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >frist name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="frist name"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                last name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="last name"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                country
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="country"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                gender
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="gender"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                phone number
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="phone number"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="email"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                <FormField
                    control={form.control}
                    name="number_of_members"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                Number of your members
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Number of your members"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />




                <FormField
                    control={form.control}
                    name="number_of_childeren"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                Number of children under 5 years
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Number of children under 5 years"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                description
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="more details ..."
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid md:grid-cols-2 gap-4">

                    <FormField
                        control={form.control}
                        name="start_date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>start date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "pl-3 text-left font-normal",
                                                    "focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>select</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}

                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="end_date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>end date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "pl-3 text-left font-normal",
                                                    "focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>select</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}

                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                </div>



                <Button className=" rounded-none w-full bg-[#F07148] text-white" type="submit">Send</Button>
            </form>
        </Form>
    )
}
