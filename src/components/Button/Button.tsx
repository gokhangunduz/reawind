import React, { ReactElement } from "react";

interface ButtonProps {
  name?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  name,
  label,
  type,
  disabled,
}: ButtonProps): ReactElement {
  return (
    <button
      name={name}
      type={type || "submit"}
      disabled={disabled || false}
      className="w-full py-3 rounded bg-transparent border border-layer-dark-800 text-layer-light-900 disabled:text-layer-light-800 dark:text-layer-light-300 disabled:dark:text-layer-light-800"
    >
      {label}
    </button>
  );
}
