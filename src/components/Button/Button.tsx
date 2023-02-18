import React, { ReactElement } from "react";

interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ label, type }: ButtonProps): ReactElement {
  return (
    <button
      type={type || "submit"}
      className="w-full py-3 rounded bg-transparent border border-layer-dark-800 text-layer-light-900 dark:text-layer-light-300 "
    >
      {label}
    </button>
  );
}
