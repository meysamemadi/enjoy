"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { vipPlusForm } from "@/actions/have-your-own-trip/form"
import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
    first_name: z.string().min(2).max(155),
    last_name: z.string().min(2).max(155),
    country: z.string().min(2).max(150),
    phone_number: z.string().min(2).max(150),
    email: z.string().min(2).max(150),
    translator: z.string().min(2).max(150),
    how_many_people: z.string().min(2).max(150),
    number_of_women: z.string().min(2).max(150),
    number_of_men: z.string().min(2).max(150),
    number_of_childeren: z.string().min(2).max(150),
    start_date: z.string().min(2).max(150),
    end_date: z.string().min(2).max(150),
    description: z.string().min(2).max(150),
})

export const VipForm = () => {

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
            phone_number: "",
            email: "",
            translator: "",
            how_many_people: "",
            number_of_women: "",
            number_of_men: "",
            number_of_childeren: "",
            start_date: "",
            end_date: "",
            description: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        setLoading(true)

        vipPlusForm(values).then((response) => {
            setIsSuccessful(true)
            setCode(response)
        }).catch((error) => console.log(error)).finally(() => setLoading(false))

    }


    if (isSuccessful) {
        return (
            <div className="flex flex-col items-center gap-4 pt-4 md:pt-8">
                <CheckCircle2 className="text-[#43B8A2]" size={64} />
                <div className="bg-[#F8F3EF] p-2 h-[56px] md:p-3 flex  justify-between items-center w-full">
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5 ">

                <div className="grid md:grid-cols-2 gap-4">

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

                </div>


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
                    name="translator"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                translator
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="translator"
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
                    name="how_many_people"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                how many people
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="how many people"
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
                        name="number_of_women"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className=" font-semibold capitalize text-[#594636]"
                                >
                                    number of women
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="number of women"
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
                        name="number_of_men"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className=" font-semibold capitalize text-[#594636]"
                                >
                                    number of men
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="number of men"
                                        {...field}
                                        className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>




                <FormField
                    control={form.control}
                    name="number_of_childeren"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className=" font-semibold capitalize text-[#594636]"
                            >
                                number of childeren
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="number of childeren"
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
                            <FormItem>
                                <FormLabel
                                    className=" font-semibold capitalize text-[#594636]"
                                >
                                    start date
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="start date"
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
                        name="end_date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className=" font-semibold capitalize text-[#594636]"
                                >
                                    end date
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="end date"
                                        {...field}
                                        className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>






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
                                <Input
                                    placeholder="description"
                                    {...field}
                                    className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />




                <Button disabled={loading} className=" rounded-none w-full md:w-fit bg-[#F07148] text-white" type="submit">Send</Button>
            </form>
        </Form>
    )
}
