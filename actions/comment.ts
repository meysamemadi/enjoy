"use server";
import axios from "axios";
import { z } from "zod";
export async function createComment(
 
  formData:any
) {
  const schema = z.object({
    name: z.string().min(2),
    comment: z.string().min(1),
    domain:z.string(),
    country:z.string(),
  });

  const { name, domain, country, comment } = formData;
  const parse = schema.safeParse({
    name,
    domain,
    country,
    comment,
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const data = parse.data;

    try {
      return axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}comment/create`, data)
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
}