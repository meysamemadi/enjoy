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

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  university: z.string().min(2).max(50),
  major: z.string().min(2).max(50),
  mobile: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  resume: z.object({
    name: z.string(),
    type: z.string().refine((type) => type.startsWith("image/"), {
      message: "File must be an image.",
    }),
    size: z.number().refine((size) => size <= 5 * 1024 * 1024, {
      message: "File size must be less than 5MB.",
    }),
  }),
});

const EdcationalForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      country: "",
      university: "",
      major: "",
      mobile: "",
      email: "",
      resume: undefined,
      description: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  name="mobile"
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

            <div className=" col-span-2">
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
                        type="file"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
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
