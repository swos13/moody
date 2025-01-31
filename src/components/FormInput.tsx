import Input from "./Input";

interface FormInputProps {
  initialValue?: string;
  label: string;
  id: string;
  styles?: string;
}

export default function FormInput({
  initialValue,
  label,
  id,
  styles,
}: FormInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${styles}`}>
      <label htmlFor={id} className={"pl-2"}>
        {label}
      </label>
      <Input initialValue={initialValue} id={id} name={id} />
    </div>
  );
}
