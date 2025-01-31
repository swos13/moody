"use client";

import { useState } from "react";
import { FieldValues, useFormContext, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  initialValue?: string;
  id?: string;
  name?: string;
  register?: UseFormRegister<T>;
}

export default function Input<T extends FieldValues>({
  initialValue,
  id,
  name,
}: InputProps<T>) {
  const [value, setValue] = useState<string>(initialValue ?? "");
  const { register } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="w-full h-[36px] sm:h-[40px] p-2 px-4 leading-4 bg-input rounded-2xl font-inter focus:outline-none focus:border-input border-solid border-2 border-input focus:bg-background box-border"
      value={value}
      id={id ?? ""}
      {...register(name || "")}
      onChange={handleChange}
    />
  );
}
