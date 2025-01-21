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
      className="w-[215px] h-[40px] p-2 px-4 leading-4 bg-input rounded-xl font-inter focus:outline-none focus:border-input border-solid border-2 border-input focus:bg-background box-border"
      value={value}
      onChange={handleChange}
      id={id ?? ""}
    />
  );
}
