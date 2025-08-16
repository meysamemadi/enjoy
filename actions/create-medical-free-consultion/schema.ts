import { z } from "zod";

export const CreateMedicalFreeConsultation = z.object({
  first_name: z
    .string({
      required_error: "first name is required",
      invalid_type_error: "first name is required",
    })
    .min(2, {
      message: "first name is too short.",
    }),

  last_name: z
    .string({
      required_error: "last name is required",
      invalid_type_error: "last name is required",
    })
    .min(2, {
      message: "last name is too short.",
    }),

  gender: z.string({
    required_error: "gender is required",
  }),

  date_of_birth: z
    .string({
      required_error: "نمی تواند خالی باشد",
      invalid_type_error: "نمی تواند خالی باشد",
    })
    .min(2, {
      message: "This can not be empty",
    }),

  country: z
    .string({
      required_error: "نمی تواند خالی باشد",
      invalid_type_error: "نمی تواند خالی باشد",
    })
    .min(2, {
      message: "This can not be empty",
    }),

  phone_number: z.string().min(2, {
    message: "This can not be empty",
  }),

  email: z.string().min(2, {
    message: "This can not be empty",
  }),

  type_of_disease: z.string().min(2, {
    message: "This can not be empty",
  }),

  disease_background: z.string().min(2, {
    message: "This can not be empty",
  }),

  description: z.string().min(2, {
    message: "This can not be empty",
  }),
  upload: z.string(),
});
