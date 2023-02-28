import React, { ReactElement } from "react";

interface IInputTextarea {
  placeholder?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function InputTextarea({
  placeholder,
  name,
  value,
  disabled,
  onChange,
  onBlur,
}: IInputTextarea): ReactElement {
  const inputClassList = {
    inputClassNames:
      "w-full h-36 min-h-[6rem] p-4 outline-none bg-transparent rounded-md transition-all duration-500",
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
    <textarea
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
    />
  );
}
