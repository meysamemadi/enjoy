"use client";

import { useParams } from "next/navigation";
import { ElementRef, useCallback, useRef, useState } from "react";
import { useAction } from "@/hooks/use-action";
import { Button } from "@/components/ui/button";
import { createMedicalFreeConsultation } from "@/actions/create-medical-free-consultion";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FormInput } from "@/components/form/form-input";
import { Label } from "@/components/ui/label";
import { FormSubmit } from "@/components/form/form-submit";
import { FormSelect } from "@/components/form/form-select";
import { FileInput } from "@/components/form/file-upload";
import axios, { AxiosResponse } from "axios";
import { Input } from "@/components/ui/input";

export function ConsultationForm() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [result, setResult] = useState(null);
  const params = useParams();
  const formRef = useRef<ElementRef<"form">>(null);

  const [documentField , setDocumentField] = useState('')

  const { execute, fieldErrors } = useAction(createMedicalFreeConsultation, {
    onSuccess: (data) => {
      setIsSuccessful(data.status);
      setResult(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const first_name = formData.get("first_name") as string;
    const last_name = formData.get("last_name") as string;
    const gender = formData.get("gender") as string;
    const date_of_birth = formData.get("date_of_birth") as string;
    const country = formData.get("country") as string;
    const phone_number = formData.get("phone_number") as string;
    const email = formData.get("email") as string;
    const type_of_disease = formData.get("type_of_disease") as string;
    const disease_background = formData.get("disease_background") as string;
    const description = formData.get("description") as string;
    const upload = formData.get("upload") as string;

    execute({
      first_name,
      last_name,
      gender,
      date_of_birth,
      country,
      phone_number,
      email,
      type_of_disease,
      disease_background,
      description,
      upload,
    });
  };

   const onFileDrop = useCallback(async (acceptedFiles: File[]) => {
     if (acceptedFiles && acceptedFiles.length > 0) {
       const selectedImage = acceptedFiles[0];

       const formData = new FormData();
       formData.append("file", selectedImage);

       await axios
         .post(
           `${process.env.NEXT_PUBLIC_API_URL}consultation/upload-educational-work`,
           formData,
           {
             headers: {
               "Content-Type": "multipart/form-data",
             },
           }
         )
         .then(
           (response: AxiosResponse<{ status: boolean; value: string }>) => {
             if (response.data.status) {
              setDocumentField(response.data.value);
             }
           }
         )
         .catch((error) => console.log(error));
     }
     // Do something with the files
   }, []);

  if (isSuccessful) {
    return (
      <div className="flex flex-col items-center gap-4">
        <CheckCircle2 className="text-[#497D59]" size={64} />
        <div className="bg-[#F8F3EF] p-2 md:p-3 flex  justify-between items-center">
          <span className="text-[#594636] text-sm font-medium">
            Tracking Code :
          </span>

          <span className="text-[#594636] text-sm font-bold">
            {
              /*@ts-ignore */
              result.id
            }
          </span>
        </div>
        <p className="text-[#594636] font-medium text-lg text-center">
          Thanks for registering your information, we will contact you soon.
        </p>

        <Button
          className="bg-[#43B8A2] rounded-none capitalize text-[#FAF7F5] w-full font-bold"
          asChild
        >
          <Link href={`/${params.lang}/medical`}>
            Back to health tourism
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <form
        action={onSubmit}
        ref={formRef}
        className="w-full p-3 rounded-md bg-white space-y-4"
      >
        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            First Name
          </Label>
          <FormInput
            errors={fieldErrors}
            id="first_name"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            last Name
          </Label>
          <FormInput
            errors={fieldErrors}
            id="last_name"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            gender
          </Label>

          <FormSelect errors={fieldErrors} id="gender" />

          {/* <Select>
              <SelectTrigger className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]">
                <SelectValue
                  className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                  placeholder="Choose your gender"
                />
              </SelectTrigger>
            <SelectContent className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]">
              <SelectItem value="0">Male</SelectItem>
              <SelectItem value="1">Female</SelectItem>
            </SelectContent>
          </Select> */}
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            Date of birth
          </Label>
          <FormInput
            errors={fieldErrors}
            id="date_of_birth"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Choose your Date of birth"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            Country
          </Label>
          <FormInput
            errors={fieldErrors}
            id="country"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="enter your country"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            phone number
          </Label>
          <FormInput
            errors={fieldErrors}
            id="phone_number"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            email
          </Label>
          <FormInput
            errors={fieldErrors}
            id="email"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            Type of disease
          </Label>
          <FormInput
            errors={fieldErrors}
            id="type_of_disease"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Choose your Type of disease"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            disease background
          </Label>
          <FormInput
            errors={fieldErrors}
            id="disease_background"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter your disease background"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            Description
          </Label>
          <FormInput
            errors={fieldErrors}
            id="description"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="your medical issue ..."
          />
        </div>

        <Input defaultValue={documentField} id="upload" name="upload" />

        <FileInput className="py-[25px]" onDrop={onFileDrop} />

        <FormSubmit className="w-full bg-[#497D59] text-white rounded-none">
          Send
        </FormSubmit>
      </form>
    </div>
  );
}
