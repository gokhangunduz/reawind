import React from "react";

interface InputTextProps {
  placeholder?: string;
  type?: "text" | "email" | "password";
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function InputText({
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
}: InputTextProps) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full h-11 p-4 outline-none bg-transparent text-layer-dark-700 dark:text-layer-light-300 border border-layer-light-200 dark:border-layer-dark-700 focus:ring-2 focus:ring-layer-light-200 dark:focus:ring-layer-dark-700 placeholder:text-layer-light-500 dark:placeholder:text-layer-dark-500 rounded-md  transition-all duration-500"
      placeholder={placeholder}
      type={type || "text"}
    />
  );
}
