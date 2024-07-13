"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "../forms/PatientForm";
import Image from "next/image";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateForms?: string;
  showTimeSelect?: boolean;
  children?: React.ReactDOM;
  renderSkeleton?: (field: any) => React.ReactNode;
}

interface IRenderField extends CustomProps {
  field: any;
}
const RenderField: React.FC<IRenderField> = ({
  field,
  control,
  fieldType,
  iconSrc,
  iconAlt,
  placeholder,
  name,
  label,
}) => {
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-ms border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              type="text"
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    default:
      break;
  }
};
const CustomFormField: React.FC<CustomProps> = ({
  control,
  fieldType,
  name,
  label,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField
            field={field}
            control={control}
            fieldType={fieldType}
            name={name}
            label={label}
          />

          {/* <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>*/}
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
