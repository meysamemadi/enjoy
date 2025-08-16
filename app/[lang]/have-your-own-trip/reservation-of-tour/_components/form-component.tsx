"use client"
import { Photographers } from './photographers'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { reservationOfTourLeader } from '@/actions/have-your-own-trip/form'
import Link from 'next/link'
import { useState } from 'react'
import { useParams } from 'next/navigation'

const formSchema = z.object({
    start_date: z.date({
        required_error: "A date of start is required.",
    }),
    end_date: z.date({
        required_error: "A date of end is required.",
    }),
    first_name: z.string({
        required_error: "first name is required.",
    }),
    last_name: z.string({
        required_error: "first name is required.",
    }),
    women_count: z.string({
        required_error: "women count is required.",
    }),
    men_count: z.string({
        required_error: "men count is required.",
    }),
    children: z.string({
        required_error: "children count is required.",
    }),
    country: z.string({
        required_error: "country is required.",
    }),
    phone_number: z.string({
        required_error: "phone number is required.",
    }),
    email: z.string({
        required_error: "email is required.",
    }),
    languages: z.string({
        required_error: "languages is required.",
    }),
    description: z.string({
        required_error: "description is required.",
    }),
    city_id: z.string().optional(), // Optional, as it might be null
    photographers: z.string().optional(), // Optional

})

export const FormComponent = ({ data }: any) => {


    const [isSuccessful, setIsSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState(null)
    const params = useParams();


    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            start_date: undefined,
            end_date: undefined,
            first_name: "",
            last_name: "",
            women_count: "",
            men_count: "",
            children: "",
            country: "",
            phone_number: "",
            email: "",
            languages: "",
            description: "",
            city_id: data?.city?.id?.toString() || "", // Convert to string or provide empty default
            photographers: data?.photographers?.map((p: any) => p.id).join(", ") || "", // Convert to string
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {


        const ids = data.photographers.length
            ? data.photographers.map((photographer: any) => photographer.id).join(", ")
            : "";

        const formattedValues = {
            ...values,
            city_id: data.city.id.toString(), // Ensure it's a string
            photographers: ids,
        };

        setLoading(true)

        reservationOfTourLeader(formattedValues).then((response) => {
            setIsSuccessful(true)
            setCode(response)
        }).catch((error) => console.log(error)).finally(() => setLoading(false))
    }


    if (isSuccessful) {
        return (
            <div className="flex flex-col items-center gap-4 mt-4 md:mt-8">
                <CheckCircle2 className="text-[#43B8A2]" size={64} />
                <div className="bg-[#F8F3EF] p-2 md:p-3 flex  justify-between items-center h-[56px] w-full max-w-[450px]">
                    <span className="text-[#594636] text-sm font-medium">
                        Tracking Code :
                    </span>

                    <span className="text-[#594636] text-sm font-bold">
                        {
                            code
                        }
                    </span>
                </div>
                <p className="text-[#594636] font-medium text-lg text-center">
                    Thanks for registering your information, we will contact you soon.
                </p>

                <Button
                    className="bg-[#F07148] rounded-none capitalize text-[#FAF7F5] w-full font-bold"
                    asChild
                >
                    <Link href={`/${params.lang}/have-your-own-trip`}>
                        Back to Have Your Own Trip
                    </Link>
                </Button>
            </div>
        );
    }


    return (
        <div>
            {data.photographers.length > 0 && <Photographers photographers={data.photographers} />}

            <h3 className=' capitalize text-[#594636] font-semibold text-[21px]'>
                city: {data.city.name}
            </h3>


            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">

                    <div className='grid md:grid-cols-2 gap-4'>

                        <FormField
                            control={form.control}
                            name="start_date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>start date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        " pl-3 text-left font-normal rounded-none border-[rgba(160,126,98,0.50)]",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
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
                                                // disabled={(date) =>
                                                //   date > new Date() || date < new Date("1900-01-01")
                                                // }
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
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>end date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        " pl-3 text-left font-normal rounded-none border-[rgba(160,126,98,0.50)]",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
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
                                                // disabled={(date) =>
                                                //   date > new Date() || date < new Date("1900-01-01")
                                                // }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className=' grid md:grid-cols-2 gap-4'>

                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>first_name</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="first name" {...field} />
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
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>last name</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className=' grid md:grid-cols-2 gap-4'>

                        <FormField
                            control={form.control}
                            name="women_count"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>women count</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="women count" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="men_count"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>men count</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="men_count" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className=' grid md:grid-cols-2 gap-4'>

                        <FormField
                            control={form.control}
                            name="children"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>children</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="children" {...field} />
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
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>country</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="country" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className=' grid md:grid-cols-2 gap-4'>

                        <FormField
                            control={form.control}
                            name="phone_number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>phone number</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="phone_number" {...field} />
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
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>email</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className=' grid md:grid-cols-2 gap-4'>

                        <FormField
                            control={form.control}
                            name="languages"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>languages</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="languages" {...field} />
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
                                    <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="more details ..."
                                            className='rounded-none border-[rgba(160,126,98,0.50)]'
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>


                    <div className='flex items-center justify-center'>

                        <Button disabled={loading} className='w-full max-w-[435px] rounded-none bg-[#F07148]' type="submit">send</Button>
                    </div>
                </form>
            </Form>



        </div>
    )
}
