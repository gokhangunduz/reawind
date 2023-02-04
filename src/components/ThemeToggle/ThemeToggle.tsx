import React, { FC, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TbMoon, TbSun } from "react-icons/tb";

export const ThemeToggle: FC = () => {
  const { theme, setTheme }: any = useContext(ThemeContext);

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <TbMoon size={24} className="animate__animated animate__rotateIn" />
      ) : (
        <TbSun size={24} className="animate__animated animate__rotateIn" />
      )}
    </div>
  );
};
