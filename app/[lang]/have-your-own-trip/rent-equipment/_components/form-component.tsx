"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
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

const formSchema = z.object({
  equipment: z.string({
    required_error: "women count is required.",
  }),

  description: z.string({
    required_error: "description is required.",
  }),
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

  country: z.string({
    required_error: "country is required.",
  }),

  city: z.string({
    required_error: "city is required.",
  }),
  phone_number: z.string({
    required_error: "phone number is required.",
  }),
  email: z.string({
    required_error: "email is required.",
  }),



})

export const FormComponent = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      equipment: "",
      description: "",
      start_date: undefined,
      end_date: undefined,
      city: "",
      country: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      email: ""

    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div>



      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">


          <FormField
            control={form.control}
            name="equipment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>Equipment</FormLabel>
                <FormControl>
                  <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="Equipment" {...field} />
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


          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[#A07E62] text-[13px] font-semibold'>city</FormLabel>
                <FormControl>
                  <Input className='rounded-none border-[rgba(160,126,98,0.50)]' placeholder="choose city" {...field} />
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




          <div className='flex items-center justify-center'>

            <Button className='w-full max-w-[435px] rounded-none bg-[#F07148]' type="submit">send</Button>
          </div>
        </form>
      </Form>



    </div>
  )
}
