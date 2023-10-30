"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useParams } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  gender: z.string({
    required_error: "Please select Gender to display.",
  }),
  academic_discipline: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  academic_orientation: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),

  email: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),

  phone_number: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),

  university: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),

  major: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),

  condition: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),


});

export function ConsultationForm() {

  const params = useParams();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      academic_discipline: "",
      academic_orientation: "",
      email: "",
      phone_number: "",
      university: "",
      major: "",
      condition: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
      console.log("formstatus", isSubmitted);

  }

  const {
    formState: { isSubmitted, isSubmitSuccessful },
  } = form;



  if (isSubmitted && isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-4">
        <CheckCircle2 className="text-[#497D59]" size={64} />
        <div className="bg-[#F8F3EF] p-2 md:p-3 flex  justify-between items-center">
          <span className="text-[#594636] text-sm font-medium">
            Tracking Code :
          </span>
          <span className="text-[#594636] text-sm font-bold">62152347</span>
        </div>
        <p className="text-[#594636] font-medium text-lg text-center">
          Thanks for registering your information, we will contact you soon.
        </p>

        <Button
          className="bg-[#497D59] rounded-none capitalize text-[#FAF7F5] w-full font-bold"
          asChild
        >
          <Link href={`/${params.lang}/educational/${params.id}`}>
            Back to education tour
          </Link>
        </Button>
      </div>
    );
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="enter frist name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="enter last name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                Gender
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]">
                    <SelectValue
                      className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                      placeholder="Choose your gender"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="academic_discipline"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                academic discipline
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="Enter your academic discipline"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="academic_orientation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                academic orientation
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="Enter your academic orientation"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="Enter your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                Phone number
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="+98"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                your university
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="type your your University"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="major"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                major
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="type your Major"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                your Condition for education
              </FormLabel>
              <FormControl>
                <Input
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="your Condition for education"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          className="bg-[#497D59] text-[#FAF7F5] w-full rounded-none"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
