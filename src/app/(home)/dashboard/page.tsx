import Button from "@/components/Button";
import { inter } from "@/styles/fonts";

export default function Dashboard() {
  return (
    <>
      <div className={` ${inter.variable} font-sans`}>
        <Button />
      </div>
      <div className={`font-irish_grover`}>This is dashboard</div>
    </>
  );
}
