import Image from "next/image";

export default function HeaderAuth() {
  return (
    <header className="bg-main h-[80px] flex justify-center align-center">
      <Image src="/logo-white.svg" alt="logo" width={48} height={48} />
    </header>
  );
}
