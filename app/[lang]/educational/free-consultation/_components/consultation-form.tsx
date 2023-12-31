"use client";

import { useParams } from "next/navigation";
import { ElementRef, useCallback, useRef, useState } from "react";
import { useAction } from "@/hooks/use-action";
import { Button } from "@/components/ui/button";
import { createFreeConsultation } from "@/actions/free-consultation";
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
  const router = useRouter();
  const formRef = useRef<ElementRef<"form">>(null);

  const [documentField , setDocumentField] = useState('')

  const { execute, fieldErrors } = useAction(createFreeConsultation, {
    onSuccess: (data) => {
      setIsSuccessful(data.status)
      setResult(data.data);
      // router.refresh();
      console.log(data.status)
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const first_name = formData.get("first_name") as string;
    const last_name = formData.get("last_name") as string;
    const gender = formData.get("gender") as string;
    const academic_discipline = formData.get("academic_discipline") as string;
    const academic_orientation = formData.get("academic_orientation") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const university = formData.get("university") as string;
    const major = formData.get("major") as string;
    const condition = formData.get("condition") as string;
    const upload = formData.get("upload") as string;

    execute({
      first_name,
      last_name,
      gender,
      academic_discipline,
      academic_orientation,
      email,
      phone_number,
      university,
      major,
      condition,
      upload
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
          className="bg-[#497D59] rounded-none capitalize text-[#FAF7F5] w-full font-bold"
          asChild
        >
          <Link href={`/${params.lang}/educational`}>
            Back to education tour
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
            academic discipline
          </Label>
          <FormInput
            errors={fieldErrors}
            id="academic_discipline"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            academic orientation
          </Label>
          <FormInput
            errors={fieldErrors}
            id="academic_orientation"
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
            university
          </Label>
          <FormInput
            errors={fieldErrors}
            id="university"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            major
          </Label>
          <FormInput
            errors={fieldErrors}
            id="major"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-[#594636] text-[13px] font-semibold capitalize">
            condition
          </Label>
          <FormInput
            errors={fieldErrors}
            id="condition"
            className="focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62] h-10 md:h-12"
            placeholder="Enter list title..."
          />
        </div>

        <Input type="hidden" defaultValue={documentField} id="upload" name="upload" />

        <FileInput className="py-[25px]" onDrop={onFileDrop} />

        <FormSubmit className="w-full bg-[#497D59] text-white rounded-none">
          Send
        </FormSubmit>
      </form>
    </div>
  );
}
