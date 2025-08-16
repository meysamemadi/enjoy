"use server";

import { revalidatePath } from "next/cache";

import { createSafeAction } from "@/lib/create-safe-action";

import { InputType, ReturnType } from "./types";
import { CreateFreeConsultation } from "./schema";
import axios from "axios";


const handler = async (data: InputType): Promise<ReturnType> => {

  let freeConsultation;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}consultation/create-uni-consultation`,
      data
    );
    freeConsultation  = response.data;
  } catch (error) {
    return {
      error: "Failed to create.",
    };
  }

  return { data: freeConsultation };
};

export const createFreeConsultation = createSafeAction(
  CreateFreeConsultation,
  handler
);
