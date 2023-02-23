import React, { ReactElement } from "react";

interface BannerProps {
  url?: string;
}

export default function Banner({ url }: BannerProps): ReactElement {
  return (
    <div className="flex items-center justify-center py-14">
      <img
        className="w-full h-full border border-layer-light-300 dark:border-layer-dark-700 shadow-lg rounded-xl transition-all duration-500"
        src={url}
        alt={url}
      />
    </div>
  );
}
