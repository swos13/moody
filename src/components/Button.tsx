"use client";

import { useEffect, useState } from "react";

type ButtonVariants = "contained" | "outlined";

interface IButton {
  text: string;
  handleClick: () => void;
  variant?: ButtonVariants;
  componentStyles?: string;
}

const buttonStyles = {
  contained: "bg-main ",
  outlined: "b-2 border-solid border-main",
};

export default function Button({
  text,
  handleClick,
  componentStyles,
  variant,
}: IButton) {
  //test firebase
  // const handleAddUser = async () => {
  //   try {
  //     await fetch("/api/mood", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         userId: -1,
  //         type: "excellent",
  //         date: "12/2024",
  //         note: "",
  //       }),
  //     });
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  const [styles, setStyles] = useState<string>(buttonStyles.contained);

  useEffect(() => {
    const variantStyles =
      variant === "contained" || variant === undefined
        ? buttonStyles.contained
        : buttonStyles.outlined;
    setStyles(variantStyles);
  }, [variant]);

  return (
    <button
      className={
        "w-[120px] h-[48px] rounded-lg text-text-light font-bold text-sm hover:bg-main-darker active:bg-main-active " +
        styles +
        " " +
        componentStyles
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
