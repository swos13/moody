interface InputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, handleChange }: InputProps) {
  return (
    <input
      className="w-[215px] h-[40px] p-2 px-4 leading-4 bg-input rounded-3xl font-inter focus:outline-none focus:border-input focus:border-solid focus:border-2 focus:bg-background box-border"
      value={value}
      onChange={handleChange}
    />
  );
}
