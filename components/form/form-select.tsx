"use client";

import { forwardRef } from "react";
// @ts-expect-error
import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { FormErrors } from "./form-errors";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface FormSelectProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue = "",
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2">
        <div className="space-y-1">
          <Select
            required={required}
            name={id}
            disabled={pending || disabled}
            aria-describedby={`${id}-error`}
          >
            <SelectTrigger className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]">
              <SelectValue
                className=" focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]"
                placeholder="Choose your gender"
              />
            </SelectTrigger>
            <SelectContent
              className={cn(
                "focus-visible:ring-0 rounded-none capitalize border-[#A07E62] placeholder:text-[#A07E62]",
                className
              )}
              id={id}
            >
              <SelectItem value="0">Male</SelectItem>
              <SelectItem value="1">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
