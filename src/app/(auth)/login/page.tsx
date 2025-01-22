"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Login() {
  const { handleSubmit } = useForm();
  const onSubmit = (inputs: any) => console.log(inputs);

  return (
    <section className="h-full flex justify-center items-center flex-col">
      <Image
        src="/logo-main.svg"
        alt="moody logo"
        width={310}
        height={105}
        className={"mb-4"}
      />
      <p className="mb-6">Log into your account</p>
      <form
        className="flex justify-center items-center flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput label="Login" id="login" />
        <FormInput label="Password" id="password" />

        <Button
          text="Log In"
          handleClick={handleSubmit(onSubmit)}
          componentStyles={"mt-4"}
        />
      </form>
      <div className="flex flex-col justify-center items-center mt-6">
        <p>Don't have an account?</p>
        <Link href="/sign-up">Sign up</Link>
      </div>
    </section>
  );
}
