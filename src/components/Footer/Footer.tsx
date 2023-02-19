import React from "react";
import FooterItem from "../FooterItem/FooterItem";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center h-40 animate__animated animate__fadeInUp">
      <FooterItem />
      <span className="text-xs font-light text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
        2023 • Gökhan Gündüz
      </span>
    </footer>
  );
}
