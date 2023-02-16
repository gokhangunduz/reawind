import React, { ReactElement } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { Link } from "react-router-dom";

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between h-16 px-6 lg:px-20 border-b border-layer-light-100 dark:border-layer-dark-800 dark:text-layer-light-50 shadow-sm transition-all duration-500 animate__animated animate__fadeInDown">
      <Link to="/">
        <h1 className="text-lg font-semibold">Gökhan Gündüz</h1>
      </Link>
      <div className="flex gap-8">
        <ThemeToggle />
        <MenuToggle />
      </div>
    </header>
  );
}
