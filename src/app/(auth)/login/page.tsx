"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";

type LoginFormInputs = {
  login: string;
  password: string;
};

export default function Login() {
  const methods = useForm<LoginFormInputs>();
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<LoginFormInputs> = (inputs) => {
    for (const input of Object.values(inputs)) {
      console.log(input);
    }
    if (error) setError("");
  };

  return (
    <section className="h-full flex justify-center items-center flex-col">
      <Image
        src="/logo-main.svg"
        alt="moody logo"
        width={310}
        height={105}
        className={"w-[205px] sm:w-[310px] mb-4"}
      />
      <p className="mb-6">Log into your account</p>
      <FormProvider {...methods}>
        <form
          className="w-[215px] flex justify-center items-center flex-col gap-[14px] sm:w-[272px] "
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormInput label="Login" id="login" styles="w-full" />
          <FormInput label="Password" id="password" styles="w-full" />
          <div className="w-full pl-2">
            {error && (
              <span
                id="errorMessage"
                className="absolute mt-[-10px] text-red-600 text-xs"
              >
                This is error message
              </span>
            )}
          </div>
          <Button
            text="Sign In"
            handleClick={methods.handleSubmit(onSubmit)}
            componentStyles={"mt-4"}
          />
        </form>
      </FormProvider>
      <div className="flex flex-col justify-center items-center mt-3">
        <p>Don&apos;t have an account?</p>
        <Link href="/sign-up">Sign up</Link>
      </div>
    </section>
  );
}
