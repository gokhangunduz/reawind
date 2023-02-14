import React, { ReactElement, useContext } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MenuToggle } from "../MenuToggle/MenuToggle";

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between h-16 px-6 lg:px-40 border-b border-layer-light-100 dark:border-layer-dark-800 dark:text-layer-light-50 shadow-sm transition-all duration-500">
      <h1 className="text-lg font-semibold">Gökhan Gündüz</h1>
      <div className="flex gap-8">
        <ThemeToggle />
        <MenuToggle />
      </div>
    </header>
  );
}
