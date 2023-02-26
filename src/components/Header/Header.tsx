import React, { ReactElement } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { Link } from "react-router-dom";
import { info } from "../../templates/template";

export default function Header(): ReactElement {
  return (
    <header className="flex items-center justify-between h-16 px-6 lg:px-48 xl:px-72 2xl:px-96 border-b border-layer-light-100 dark:border-layer-dark-800 dark:text-layer-light-50 shadow-sm transition-all duration-500 animate__animated animate__fadeInDown">
      <Link to="/">
        <h1 className="text-lg font-semibold">{info.fullName}</h1>
      </Link>
      <div className="flex gap-8">
        <ThemeToggle />
        <MenuToggle />
      </div>
    </header>
  );
}
