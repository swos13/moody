import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Moody",
  description:
    "Moody is a web application that let's the user track their mood over time. Each day user can choose their overall mood to build their mood history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background h-[100vh] flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
