import Input from "./Input";

interface FormInputProps {
  initialValue?: string;
  label: string;
  id: string;
}

export default function FormInput({ initialValue, label, id }: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={"pl-2"}>
        {label}
      </label>
      <Input initialValue={initialValue} id={id} />
    </div>
  );
}
