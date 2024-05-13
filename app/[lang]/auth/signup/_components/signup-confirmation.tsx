"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useSignupConfirmationModal } from "@/hooks/use-signup-confirmation-modal";

const items = [

  {
    id: "home",
    label: "Future tours in Iran",
  },
  {
    id: "applications",
    label: "Travel packages to Iran",
  },
  {
    id: "desktop",
    label: "Health tourist services",
  },
  {
    id: "downloads",
    label: "Business news",
  },
  {
    id: "documents",
    label: "Introduction of Iranian handicrafts",
  },
  {
    id: "documents2",
    label: "Scientific news and education in Iran",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const initialState = {
  message: null,
};

export function SignupConfirmation() {


    // const [state, formAction] = useFormState(createTodo, initialState);


      const signupConfirmationModal = useSignupConfirmationModal();


    const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    signupConfirmationModal.onClose();
    router.push("/auth/login")
  }

    function handleToggleAll(checked: boolean) {
    const allItems = items.map((item) => item.id);
    form.setValue("items", checked ? allItems : []);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base font-bold leading-[24px]">
                  What type of newsletters would you like to receive?
                </FormLabel>
              </div>
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value?.length === items.length}
                    onCheckedChange={(checked:any) => handleToggleAll(checked)}
                  />
                </FormControl>
                <FormLabel className=" font-medium text-xs lg:text-sm leading-[200%] capitalize text-[#594636]">
                  all items Recents
                </FormLabel>
              </FormItem>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className=" font-medium text-xs lg:text-sm leading-[200%] capitalize text-[#594636]">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className=" rounded-none bg-[#A98D69] py-4 px-[40px] text-sm font-bold capitalize leading-[85.2%]"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
