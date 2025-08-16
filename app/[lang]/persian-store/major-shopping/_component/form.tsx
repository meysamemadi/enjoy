"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
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
import { useState } from "react"
import { useParams } from "next/navigation"
import { residenceReservationsForm } from "@/actions/have-your-own-trip/form"
import Link from "next/link"
import { majorShopping } from "@/actions/persian-store"

const formSchema = z.object({
    first_name: z.string().min(2).max(155),
    last_name: z.string().min(2).max(155),
    company_name: z.string().min(2).max(155),
    country: z.string().min(2).max(150),
    phone_number: z.string().min(2).max(150),
    email: z.string().min(2).max(150),
    description: z.string().min(2).max(150),
    file: z.instanceof(File).optional(),
})

export const MyForm = () => {

    const [isSuccessful, setIsSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState(null)
    const params = useParams();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            country: "",
            company_name: "",
            phone_number: "",
            email: "",
            description: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)

        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          if (key === 'file' && value instanceof File) {
            formData.append(key, value);
          } else if (typeof value === 'string') {
            formData.append(key, value);
          }
        });

        majorShopping(formData).then((response) => {
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
                    className="bg-[#A98D69] rounded-none capitalize text-[#FAF7F5] w-full font-bold"
                    asChild
                >
                    <Link href={`/${params.lang}/persian-store`}>
                        Back to Persian Store
                    </Link>
                </Button>
            </div>
        );
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
                    name="company_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                country
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="company name"
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
                                    placeholder="description"
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
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold capitalize text-[#594636]">
                                Upload File
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    onChange={(e) => field.onChange(e.target.files?.[0])}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />





                <Button disabled={loading} className=" rounded-none w-full bg-[#A98D69] text-white" type="submit">Send</Button>
            </form>
        </Form>
    )
}
