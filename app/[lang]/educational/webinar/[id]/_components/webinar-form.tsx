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

const formSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  country: z.string().min(2).max(50),
  major: z.string().min(2).max(150),
  mobile: z.string().min(2).max(20),
  email: z.string().min(2).max(150),
});

const WebinarForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      major: "",
      mobile: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none border-[#594636]"
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none border-[#594636]"
                  placeholder="shadcn"
                  {...field}
                />
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
              <FormLabel className="text-[#594636] text-[13px] font-semibold">
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none border-[#594636]"
                  placeholder="shadcn"
                  {...field}
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
              <FormLabel className="text-[#594636] text-[13px] font-semibold">
                Country
              </FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none border-[#594636]"
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="major"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold">
                Major
              </FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none border-[#594636]"
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none border-[#594636]"
                  placeholder="shadcn"
                  {...field}
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
              <FormLabel className="text-[#594636] text-[13px] font-semibold">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none border-[#594636]"
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
 
export default WebinarForm;