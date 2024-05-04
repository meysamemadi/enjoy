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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: "fullname must be at least 2 characters.",
  }),
  country: z.string({
    required_error: "Please select a country.",
  }),
  mobile: z.string({
    required_error: "Please enter mobile.",
  }),
  email: z.string({
    required_error: "Please enter email.",
  }),
  identifier_code: z.string({
    required_error: "Please enter a identifier code.",
  }),
  username: z.string({
    required_error: "Please enter a username.",
  }),
  password: z.string({
    required_error: "Please enter a password.",
  }),
  password_repeat: z.string({
    required_error: "Please enter a password repeat.",
  }),
});


const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

export function SignupForm() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      country: "",
      mobile: "",
      email: "",
      identifier_code: "",
      username: "",
      password: "",
      password_repeat:"",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
 
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                Your Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  className="focus-visible:ring-0 rounded-none capitalize bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] h-[55px] md:h-[56px]"
                  type="text"
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
            <FormItem className="flex flex-col">
              <FormLabel>Country</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "h-[55px] md:h-[56px] justify-between bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] rounded-none",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? languages.find(
                            (language) => language.value === field.value
                          )?.label
                        : "choose your country"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className=" p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("country", language.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="  text-[#594636] text-[13px] font-semibold capitalize">
                phone number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="+98"
                  className="focus-visible:ring-0 rounded-none capitalize bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] h-[55px] md:h-[56px]"
                  type="text"
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
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                email
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
          name="identifier_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                identifier code
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Identifier code"
                  className="focus-visible:ring-0 rounded-none capitalize bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] h-[55px] md:h-[56px]"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  className="focus-visible:ring-0 rounded-none capitalize bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] h-[55px] md:h-[56px]"
                  type="text"
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
                password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  className="focus-visible:ring-0 rounded-none capitalize bg-inherit border-[#A07E62] placeholder:text-[#828282] lg:placeholder:text-[#594636] h-[55px] md:h-[56px]"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password_repeat"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#594636] text-[13px] font-semibold capitalize">
                repeat password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
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
