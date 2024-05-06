"use server"
import * as z from "zod";
import { SignUpSchema } from "@/schema/user";
import axios from "axios";


export const signup = async (values: z.infer<typeof SignUpSchema>) => {

     const validatedFields = SignUpSchema.safeParse(values);

     if (!validatedFields.success) {
       return { error: "خطا در ورود اطلاعات" };
     }


  try {
    return axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}user/register`,
        validatedFields.data
      )
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log("eeeeeeeee", error);
      });
  } catch (error) {
    throw error;
  }
};