"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import Image from "next/image";

export default function Login() {
  const { handleSubmit } = useForm();
  const onSubmit = (inputs: any) => console.log(inputs);

  return (
    <section className="h-full flex justify-center items-center flex-col">
      <Image src="" alt="moody logo" />
      <form
        className="flex justify-center items-center flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput label="Login" id="login" />
        <FormInput label="Password" id="password" />

        <button>Sign In</button>
      </form>
    </section>
  );
}
1;
