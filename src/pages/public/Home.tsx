import React, { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div
      style={{ height: "calc(100vh - 9rem)" }}
      className="h-full flex flex-col items-center justify-center gap-10 animate__animated animate__zoomIn animate__slow"
    >
      <h2 className="text-4xl lg:text-7xl text-center font-bold text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
        Gökhan Gündüz
      </h2>
      <h3 className="text-2xl lg:text-3xl font-semibold text-layer-dark-600 dark:text-layer-light-100 transition-all duration-500">
        Frontend Developer
      </h3>
    </div>
  );
}
