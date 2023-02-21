import React, { ReactElement } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function FooterItems(): ReactElement {
  const itemClassName =
    "text-layer-dark-900 hover:text-layer-dark-400 dark:text-layer-light-50 dark:hover:text-layer-light-400 hover:scale-75 transition-all duration-500";

  const items = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gokhangunduz",
      icon: <FaLinkedin className={`text-[1.75rem] ${itemClassName}`} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/gokhangunduz",
      icon: <FaGithub className={`text-[1.75rem] ${itemClassName}`} />,
    },
    {
      name: "Email",
      url: "mailto:mail@gokhangunduz.com.tr",
      icon: (
        <MdOutlineAlternateEmail
          className={`text-[1.90rem] ${itemClassName}`}
        />
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
