import React, { FC } from "react";

export const Home: FC = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 8rem)" }}
      className="flex flex-col gap-6 items-center justify-center bg-layer-50 dark:bg-layer-900 transition-all duration-500"
    >
      <h1 className="text-5xl font-semibold dark:text-layer-50">
        Gökhan Gündüz
      </h1>
      <h2 className="text-xl font-medium dark:text-primary">
        Frontend Developer
      </h2>
    </div>
  );
};
