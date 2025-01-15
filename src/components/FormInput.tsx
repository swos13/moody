import Input from "./Input";

interface FormInputProps {
  initialValue?: string;
  label: string;
  id: string;
}

export default function FormInput({ initialValue, label, id }: FormInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input initialValue={initialValue} id={id} />
    </>
  );
}
