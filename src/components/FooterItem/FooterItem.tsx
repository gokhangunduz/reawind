import React, { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function FooterItem(): ReactElement {
  const items = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gokhangunduz",
      icon: (
        <FaLinkedin className="text-[1.75rem] text-layer-dark-900 hover:text-layer-dark-400 dark:text-layer-light-50 dark:hover:text-layer-light-400 transition-all duration-500" />
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/gokhangunduz",
      icon: (
        <FaGithub className="text-[1.75rem] text-layer-dark-900 hover:text-layer-dark-400 dark:text-layer-light-50 dark:hover:text-layer-light-400 transition-all duration-500" />
      ),
    },
    {
      name: "Email",
      url: "mailto:mail@gokhangunduz.com.tr",
      icon: (
        <FaPaperPlane className="text-[1.5rem] text-layer-dark-900 hover:text-layer-dark-400 dark:text-layer-light-50 dark:hover:text-layer-light-400 transition-all duration-500" />
      ),
    },
  ];

  return (
    <ul className="flex items-center justify-center gap-10">
      {items.map((item: any) => (
        <li key={item.name}>
          <a target="_blank" rel="noreferrer" href={item.url}>
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
