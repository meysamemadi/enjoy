"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  university: z.string().min(2).max(50),
  major: z.string().min(2).max(50),
  phone_number: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});

const EdcationalForm = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [result, setResult] = useState(null);

  const params = useParams();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      country: "",
      university: "",
      major: "",
      phone_number: "",
      email: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}consultation/create-educational-tour`,
      values
    );
    if (response.data.status) {
      setIsSuccessful(true);
      setResult(response.data.data);
    }
  }

  if (isSuccessful && result) {
    return (
      <div className="container ">
        <section className="bg-white p-4 md:p-6 lg:p-[40px]">
          <div className="flex flex-col items-center gap-4">
            <CheckCircle2 className="text-[#497D59]" size={64} />
            <div className="bg-[#F8F3EF] p-2 md:p-3 flex  justify-between items-center">
              <span className="text-[#594636] text-sm font-medium">
                Tracking Code :
              </span>

              <span className="text-[#594636] text-sm font-bold">
                {
                  /*@ts-ignore */
                  result.id
                }
              </span>
            </div>
            <p className="text-[#594636] font-medium text-lg text-center">
              Thanks for registering your information, we will contact you soon.
            </p>

            <Button
              className="bg-[#497D59] rounded-none capitalize text-[#FAF7F5] w-full font-bold"
              asChild
            >
              <Link href={`/${params.lang}/educational`}>
                Back to education
              </Link>
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="container ">
      <section className="bg-white p-4 md:p-6 lg:p-[40px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" space-y-6">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                        your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                          placeholder="enter your Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                        your country
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                          placeholder="enter your country"
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
                          placeholder="enter your university"
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
                        your major
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                          placeholder="enter your major"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" space-y-6">
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                        Your phone number
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                          placeholder="enter phone number"
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
                        your email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                          placeholder="enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                        your description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your description"
                          className=" h-[135px] focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              className=" mt-4 col-span-2 rounded-none bg-[#497D59] w-full text-[#FAF7F5] font-bold"
              type="submit"
            >
              send
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
};

export default EdcationalForm;
