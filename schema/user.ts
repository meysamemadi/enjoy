import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, {
    message: "ایمیل  نمی تواند خالی باشد",
  }),
  password: z.string().min(8, {
    message: "رمز عبور نمی تواند خالی باشد",
  }),
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



export const personalInfoSchema = z.object({
  visaType: z.enum(["tourism", "medical", "education", "business", "work"]),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  nickname: z.string().optional(),
  gender: z.string().min(1, "Gender is required"),
  fatherName: z.string().min(2, "Father's name is required"),
  motherName: z.string().min(2, "Mother's name is required"),
  nationality: z.string().min(2, "Nationality is required"),
  otherNationality: z.string().optional(),
  countryOfResidence: z.string().min(2, "Country of residence is required"),
  countryOfBirth: z.string().min(2, "Country of birth is required"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  maritalStatus: z.string().min(1, "Marital status is required"),
  occupation: z.string().min(2, "Occupation is required"),
  employmentStatus: z.string().min(1, "Employment status is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  description: z.string().optional(),
})

export const passportInfoSchema = z.object({
  passportNumber: z.string().min(1, "Passport number is required"),
  passportType: z.string().min(1, "Passport type is required"),
  passportIssueDate: z.date({
    required_error: "Passport issue date is required",
  }),
  passportExpiryDate: z.date({
    required_error: "Passport expiry date is required",
  }),
  dateOfIssue: z.date({
    required_error: "Date of issue is required",
  }),
  expirationDate: z.date({
    required_error: "Expiration date is required",
  }),
  estimatedEntrance: z.date({
    required_error: "Estimated entrance date is required",
  }),
  stayDuration: z.string().min(1, "Stay duration is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  passportScan: z.string().optional(),
  passportPhoto: z.string().optional(),
  travelInsurance: z.string().min(1, "Travel insurance selection is required"),
  embassy: z.string().min(1, "Embassy selection is required"),
  description: z.string().optional(),
})

export type PersonalInfo = z.infer<typeof personalInfoSchema>
export type PassportInfo = z.infer<typeof passportInfoSchema>