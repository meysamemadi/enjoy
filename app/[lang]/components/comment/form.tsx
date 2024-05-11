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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { countries } from "@/lib/country";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createComment } from "@/actions/comment";
import { useCommentConfirmationModal } from "@/hooks/use-comment-confirmation-modal";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  domain: z.string({
    required_error: "Please select an Domain",
  }),
  country: z.string({
    required_error: "Please select Your Country",
  }),
  comment: z.string().min(2, {
    message: "Please enter your Comment",
  }),
});

export function CommentForm() {

  const commentModal = useCommentConfirmationModal();




  



  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    createComment(values)
      .then((res) => {

        if(res.success)
          {
            commentModal.onOpen();
          }
      })
      .catch((err) => console.log("client err", err));
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6  items-stretch">
          <div className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] text-[#A07E62] font-semibold capitalize leading-[normal]">
                    name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[55px] md:h-[56px] rounded-none py-[20px] placeholder:capitalize border-[rgba(160,126,98,0.50)] placeholder:text-[#828282]"
                      placeholder="type your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] text-[#A07E62] font-semibold capitalize leading-[normal]">
                    Select our domains
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-[55px] md:h-[56px] rounded-none border-[rgba(160,126,98,0.50)]">
                        <SelectValue placeholder="Select our domains" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[13px] text-[#A07E62] font-semibold capitalize leading-[normal]">
                    Country
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "h-[55px] md:h-[56px] justify-between bg-inherit border-[rgba(160,126,98,0.50)] placeholder:text-[#828282] lg:placeholder:text-[#594636] rounded-none",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? countries.find(
                                (country) => country.code === field.value
                              )?.en
                            : "choose your country"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className=" w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search Country..." />
                        <CommandList>
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((country) => (
                              <CommandItem
                                value={country.en}
                                key={country.code}
                                onSelect={() => {
                                  form.setValue("country", country.code);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    country.code === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {country.en}
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
          </div>
          <div className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] text-[#A07E62] font-semibold capitalize leading-[normal]">
                    Bio
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="type your comment "
                      className="resize-none h-[248px] border-[rgba(160,126,98,0.50)] rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          className="py-4 px-[48px] w-full lg:w-fit rounded-none bg-[#497D59] text-white self-end"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
