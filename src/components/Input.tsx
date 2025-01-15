"use client";

import { useState } from "react";

interface InputProps {
  initialValue?: string;
  id?: string;
}

export default function Input({ initialValue, id }: InputProps) {
  const [value, setValue] = useState<string>(initialValue ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="w-[215px] h-[40px] p-2 px-4 leading-4 bg-input rounded-3xl font-inter focus:outline-none focus:border-input focus:border-solid focus:border-2 focus:bg-background box-border"
      value={value}
      onChange={handleChange}
      id={id ?? ""}
    />
  );
}
