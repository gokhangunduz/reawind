import React, { ReactElement } from "react";

export default function Intro(): ReactElement {
  return (
    <div
      style={{ height: "calc(100vh - 9rem)" }}
      className="h-full flex flex-col items-center justify-center xs:gap-4 sm:gap-6 md:gap-8 xl:gap-10 animate__animated animate__zoomIn animate__slow"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-center font-bold text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
        Gökhan Gündüz
      </h2>
      <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-layer-dark-600 dark:text-layer-light-100 transition-all duration-500">
        Frontend Developer
      </h3>
    </div>
  );
}
