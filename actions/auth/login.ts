"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schema/user";


export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "خطا در ورود اطلاعات", data: values };
  }

 

   await signIn("credentials", validatedFields.data);

  

 
};