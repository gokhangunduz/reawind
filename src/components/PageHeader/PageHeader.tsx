import React from "react";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({
  title,
}: PageHeaderProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-64 text-layer-dark-900 dark:text-layer-light-50 select-none text-center transition-all duration-500">
      <span className="text-2xl sm:text-5xl font-semibold ">{title}</span>
      <span className="font-normal text-layer-dark-800 dark:text-layer-light-200 transition-all duration-500">
        Gökhan Gündüz
      </span>
    </div>
  );
}
