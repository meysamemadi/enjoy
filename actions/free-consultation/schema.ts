import { z } from "zod";

export const CreateFreeConsultation = z.object({
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

  academic_discipline: z
    .string({
      required_error: "نمی تواند خالی باشد",
      invalid_type_error: "نمی تواند خالی باشد",
    })
    .min(2, {
      message: "This can not be empty",
    }),

  academic_orientation: z
    .string({
      required_error: "نمی تواند خالی باشد",
      invalid_type_error: "نمی تواند خالی باشد",
    })
    .min(2, {
      message: "This can not be empty",
    }),

  email: z.string().min(2, {
    message: "This can not be empty",
  }),

  phone_number: z.string().min(2, {
    message: "This can not be empty",
  }),

  university: z.string().min(2, {
    message: "This can not be empty",
  }),

  major: z.string().min(2, {
    message: "This can not be empty",
  }),

  condition: z.string().min(2, {
    message: "This can not be empty",
  }),
  upload: z.string(),
});
