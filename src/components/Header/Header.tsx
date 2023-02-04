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
    <header className="py-4 px-40 bg-layer-50 dark:bg-layer-900 dark:text-layer-50 shadow-lg transition-all duration-500">
      <div className="flex justify-between">
        <Link to="/" className="">
          Gökhan Gündüz
        </Link>
        <div className="flex gap-12">
          <ul className="flex gap-6">
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
      </div>
    </header>
  );
};
