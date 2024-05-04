"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "@/components/ui/use-toast";
import { FormInput } from "@/components/form/form-input";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
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
                  placeholder="Enter your Email"
                  className="focus-visible:ring-0 rounded-none capitalize bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] h-[55px] md:h-[56px]"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Password"
                  className="focus-visible:ring-0 rounded-none capitalize bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] h-[55px] md:h-[56px]"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full rounded-none bg-[#A98D69] h-[56px] py-4"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
