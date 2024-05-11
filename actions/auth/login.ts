"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schema/user";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AuthError } from "next-auth";


export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "خطا در ورود اطلاعات", data: values };
  }


  const data = validatedFields.data;
 



   try {
    
     await signIn("credentials", {
       ...data,
       redirectTo: "/dashboard",
     });

   } catch (error) {
     if (error instanceof AuthError) {
       switch (error.type) {
         case "CredentialsSignin":
           return { error: "Invalid credentials!" };

         default:
           return { error: "Something went wrong!" };
       }
     }

     throw error;
   }

  //  await signIn("credentials", {
   
  //    redirectTo: "/",
  //    ...data,
  //  });

   revalidatePath("/")
  

  

 
};