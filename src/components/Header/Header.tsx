import React, { FC } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Link, NavLink } from "react-router-dom";

export const Header: FC = () => {
  const navRoutes = [
    { path: "/", name: "Home" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="h-20 px-80 2xl:px-80 xl:px-40 lg:px-20 flex items-center justify-between  bg-layer-100 dark:bg-layer-800 dark:text-layer-50 text-base font-normal shadow-lg transition-all duration-500 animate__animated animate__fadeInDown">
      <Link className="font-semibold" to="/">
        Gökhan Gündüz
      </Link>
      <div className="flex gap-12">
        <ul className="flex gap-6 md:hidden">
          {navRoutes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
