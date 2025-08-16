"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Plane, Train, Bus, Calendar, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { bookTicket } from "@/actions/base"
import { TransportTypeSelector } from "./transport-type-selector"
import { experimental_useFormStatus } from "react-dom"

const transportTypes = [
    { id: "airplane", icon: Plane, label: "Airplane" },
    { id: "train", icon: Train, label: "Train" },
    { id: "bus", icon: Bus, label: "Bus" },
] as const

const formSchema = z.object({
    transportType: z.enum(["airplane", "train", "bus"]),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    country: z.string().min(2),
    ticketType: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    origin: z.string().min(2),
    destination: z.string().min(2),
    departureDate: z.date(),
    returnDate: z.date().optional(),
    menCount: z.number().min(0),
    womenCount: z.number().min(0),
    childrenCount: z.number().min(0),
    description: z.string().optional(),
})

function SubmitButton() {
    return (
        <Button
            type="submit"
            className="w-full bg-[#A07E62] hover:bg-[#8B6B53] text-white"
        
        >
            Send
        </Button>
    )
}

export const TicketForm = () => {
    const [transportType, setTransportType] = useState<"airplane" | "train" | "bus">("airplane")

    const [formState, setFormState] = useState<{ success?: boolean; message?: string } | null>(null)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            transportType: "airplane",
            menCount: 0,
            womenCount: 0,
            childrenCount: 0,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData()
        Object.entries(values).forEach(([key, value]) => {
            if (value instanceof Date) {
                formData.append(key, value.toISOString())
            } else {
                formData.append(key, String(value))
            }
        })
        const result = await bookTicket(formData)
        setFormState(result)
    }

    useEffect(() => {
        if (formState) {
            // Handle the form state, e.g., show a success message or error
            console.log(formState)
            // Reset form state after a delay
            const timer = setTimeout(() => setFormState(null), 5000)
            return () => clearTimeout(timer)
        }
    }, [formState])

    return (
        <div className="container mt-6 md:mt-[35px] ">
            <h1 className="text-3xl font-semibold text-[#A07E62]">Book A Ticket</h1>


            <div className="py-6 md:py-12 px-4 md:px-6 2xl:px-[94px]  bg-white">


                <div className=" ">
                    <h2 className="text-lg text-[#A07E62] mb-4 font-bold">Select ticket type</h2>

                    <TransportTypeSelector
                        selectedType={transportType}
                        onSelect={(type) => {
                            setTransportType(type)
                            form.setValue("transportType", type)
                        }}
                    />
                    {/* <div className="flex gap-8 border-b border-[#A07E62] pb-6">
                        {transportTypes.map(({ id, icon: Icon, label }) => (
                            <button
                                key={id}
                                onClick={() => {
                                    setTransportType(id)
                                    form.setValue("transportType", id)
                                }}
                                className={cn(
                                    "flex flex-col items-center gap-2 text-[#A07E62] transition-colors w-full",
                                    transportType === id && "text-[#594636] font-bold select-vehical-type"
                                )}
                            >
                                <Icon className="w-8 h-8" />
                                <span>{label}</span>
                            </button>
                        ))}
                    </div> */}
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter First Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Last Name" {...field} />
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
                                        <FormLabel>Country</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select country" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="us">United States</SelectItem>
                                                <SelectItem value="uk">United Kingdom</SelectItem>
                                                <SelectItem value="ca">Canada</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="ticketType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type Of Ticket</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select ticket type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="economy">Economy</SelectItem>
                                                <SelectItem value="business">Business</SelectItem>
                                                <SelectItem value="first">First Class</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="origin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Origin</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Select origin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="destination"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Destination</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write destination" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="departureDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Departure Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <CalendarComponent
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date()
                                                    }
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
                                name="returnDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Return Date (If Needed)</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <CalendarComponent
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < form.getValues("departureDate")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="menCount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Men</FormLabel>
                                        <Select
                                            onValueChange={(value) => field.onChange(parseInt(value))}
                                            defaultValue={String(field.value)}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select number" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[0, 1, 2, 3, 4, 5].map((num) => (
                                                    <SelectItem key={num} value={String(num)}>
                                                        {num}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="womenCount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Women</FormLabel>
                                        <Select
                                            onValueChange={(value) => field.onChange(parseInt(value))}
                                            defaultValue={String(field.value)}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select number" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[0, 1, 2, 3, 4, 5].map((num) => (
                                                    <SelectItem key={num} value={String(num)}>
                                                        {num}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="childrenCount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Children Under 2 Years</FormLabel>
                                        <Select
                                            onValueChange={(value) => field.onChange(parseInt(value))}
                                            defaultValue={String(field.value)}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select number" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[0, 1, 2, 3, 4, 5].map((num) => (
                                                    <SelectItem key={num} value={String(num)}>
                                                        {num}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
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
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div>
                            <FormLabel>Upload Documents (Optional)</FormLabel>
                            <FormDescription className="text-sm text-muted-foreground mb-2">
                                Personal Photo, Degree, Passport
                            </FormDescription>
                            <div className="border-2 border-dashed rounded-lg p-8 text-center">
                                <Upload className="w-8 h-8 mx-auto mb-2 text-[#A07E62]" />
                                <p className="text-sm text-muted-foreground">
                                    Click to choose a file or drag here
                                </p>
                            </div>
                        </div>

                        {formState && (
                            <div className={cn(
                                "p-4 mb-4 text-sm rounded-lg",
                                formState.success
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                            )}>
                                {formState.message}
                            </div>
                        )}

                        <SubmitButton />
                    </form>
                </Form>
            </div>
        </div>
    )
}
