"use client";

import { useState } from "react";
import Input from "@/components/Input";

export default function Login() {
  const [login, setLogin] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  return (
    <>
      <div className={`font-irish_grover`}>This is Login</div>
      <Input value={login} handleChange={handleChange} />
    </>
  );
}
