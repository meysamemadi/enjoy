import * as z from "zod";

export const LoginSchema = z.object({
  mobile: z.string().min(1, {
    message: "رمز عبور نمی تواند خالی باشد",
  }),
  code: z.optional(z.string()),
});


export const SignUpSchema = z.object({
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
