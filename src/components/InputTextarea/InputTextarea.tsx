import React from "react";

interface InputTextareaProps {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function InputTextarea({
  placeholder,
  name,
  value,
  onChange,
}: InputTextareaProps) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-11 min-h-[6rem] p-4 outline-none bg-transparent text-layer-dark-700 dark:text-layer-light-300 border border-layer-light-200 dark:border-layer-dark-700 focus:ring-2 focus:ring-layer-light-200 dark:focus:ring-layer-dark-700 placeholder:text-layer-light-500 dark:placeholder:text-layer-dark-500 rounded-md transition-all duration-500"
      placeholder={placeholder}
    />
  );
}
