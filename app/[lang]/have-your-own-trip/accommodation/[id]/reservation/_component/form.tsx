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

const formSchema = z.object({
    first_name: z.string().min(2).max(155),
    last_name: z.string().min(2).max(155),
    country: z.string().min(2).max(150),
    gender: z.string().min(2).max(150),
    phone_number: z.string().min(2).max(150),
    email: z.string().min(2).max(150),
    number_of_women: z.string().min(2).max(150),
    number_of_men: z.string().min(2).max(150),
    number_of_childeren: z.string().min(2).max(150),
    from_age: z.string().min(2).max(150),
    to_age: z.string().min(2).max(150),
    start_date: z.date({
        required_error: "A start date is required.",
    }),
    end_date: z.date({
        required_error: "A end_date is required.",
    }),
    description: z.string().min(2).max(150),
})

export const VipForm = () => {

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
            number_of_women: "",
            number_of_men: "",
            number_of_childeren: "",
            start_date: undefined,
            end_date: undefined,
            from_age: "",
            to_age: "",
            description: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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


                <div className="grid md:grid-cols-2 gap-4">

                    <FormField
                        control={form.control}
                        name="number_of_men"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className=" font-semibold capitalize text-[#594636]"
                                >
                                    men count
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="men count"
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
                        name="number_of_women"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className=" font-semibold capitalize text-[#594636]"
                                >
                                    women count
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="women count"
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
                                children count
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="children count"
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




                <div className="flex flex-col">
                    <FormLabel
                        className=" font-semibold capitalize text-[#594636]"
                    >
                        What is their age range?
                    </FormLabel>
                    <div className="flex mt-2 w-full gap-2 items-center border p-2 border-[#A07E62]">
                        <FormField
                            control={form.control}
                            name="from_age"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-1">

                                    <FormLabel
                                        className=" font-medium capitalize text-[#594636]"
                                    >
                                        from
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            {...field}
                                            className="focus-visible:ring-0 rounded-none capitalize border-none placeholder:text-[#A07E62] h-10 md:h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="to_age"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-1">

                                    <FormLabel
                                        className=" font-medium capitalize text-[#594636]"
                                    >
                                        to
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder=""
                                            {...field}
                                            className="focus-visible:ring-0 rounded-none capitalize border-none placeholder:text-[#A07E62] h-10 md:h-12"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    </div>
                </div>









                <Button className=" rounded-none w-full bg-[#F07148] text-white" type="submit">Send</Button>
            </form>
        </Form>
    )
}
