import React from "react";

interface IInputText {
  placeholder?: string;
  type?: "text" | "email" | "password";
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function InputText({
  placeholder,
  type,
  name,
  value,
  disabled,
  onChange,
  onBlur,
}: IInputText) {
  const inputClassList = {
    inputClassNames:
      "w-full h-11 p-4 outline-none bg-transparent rounded-md transition-all duration-500",
    textcolorClassNames: "text-layer-dark-700 dark:text-layer-light-300",
    borderClassNames:
      "border border-layer-light-200 dark:border-layer-dark-700",
    focusClassNames:
      "focus:ring-2 focus:ring-layer-light-200 dark:focus:ring-layer-dark-700",
    placeholderClassNames:
      "placeholder:text-layer-light-500 dark:placeholder:text-layer-dark-500",
    disabledClassNames: "disabled:cursor-not-allowed",
  };

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled || false}
      className={`
        ${inputClassList.inputClassNames}
        ${inputClassList.textcolorClassNames}
        ${inputClassList.borderClassNames}
        ${inputClassList.focusClassNames}
        ${inputClassList.placeholderClassNames}
        ${inputClassList.disabledClassNames}
      `}
      placeholder={placeholder}
      type={type || "text"}
    />
  );
}
