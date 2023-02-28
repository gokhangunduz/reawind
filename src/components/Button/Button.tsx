import React, { ReactElement } from "react";

interface IButton {
  name?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  name,
  label,
  type,
  loading,
  disabled,
}: IButton): ReactElement {
  const buttonClassList = {
    buttonClassNames:
      "w-full font-semibold py-3 shadow rounded-md transition duration-500",
    bgcolorClassNames: "bg-layer-light-50 dark:bg-layer-dark-800",
    textcolorClassNames: "text-layer-dark-800 dark:text-layer-light-200",
    borderClassNames:
      "border border-layer-light-100 dark:border-layer-dark-800",
    hoverClassNames: "hover:scale-95",
    focusClassNames: "focus:ring-2 focus:ring-layer-light-400",
    disabledClassNames:
      "disabled:text-layer-dark-300 disabled:dark:text-layer-dark-600  disabled:shadow-none disabled:hover:scale-100 disabled:cursor-not-allowed",
  };

  return (
    <button
      name={name}
      type={type || "submit"}
      disabled={disabled || loading || false}
      className={`
        ${buttonClassList.buttonClassNames}
        ${buttonClassList.bgcolorClassNames}
        ${buttonClassList.textcolorClassNames}
        ${buttonClassList.borderClassNames}
        ${buttonClassList.hoverClassNames}
        ${buttonClassList.focusClassNames}
        ${buttonClassList.disabledClassNames}
        `}
    >
      {loading ? (
        <div className="transition-all duration-500">Processing...</div>
      ) : (
        label
      )}
    </button>
  );
}
