import React, { ReactElement } from "react";
import FooterItems from "../FooterItems/FooterItems";
import config from "../../templates/config.json";

export default function Footer(): ReactElement {
  return (
    <footer className="flex flex-col gap-4 items-center justify-end p-4 h-40 animate__animated animate__fadeInUp">
      <FooterItems />
      <span className="text-xs font-light text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
        {config.year} • {config.fullName}
      </span>
    </footer>
  );
}
