import React from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center h-40 animate__animated animate__fadeInUp">
      <ul className="flex items-center justify-center gap-10">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/gokhangunduz"
          >
            <FaLinkedin className="text-[1.75rem] hover:text-[1.5rem] text-layer-dark-900 hover:text-layer-dark-400 dark:text-layer-light-50 dark:hover:text-layer-light-400 transition-all duration-500" />
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gokhangunduz"
          >
            <FaGithub className="text-[1.75rem] hover:text-[1.5rem] text-layer-dark-900 hover:text-layer-dark-400 dark:text-layer-light-50 dark:hover:text-layer-light-400 transition-all duration-500" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:mail@gokhangunduz.com.tr"
          >
            <FaPaperPlane className="text-[1.5rem] hover:text-[1.25rem] text-layer-dark-900 hover:text-layer-dark-400 dark:text-layer-light-50 dark:hover:text-layer-light-400 transition-all duration-500" />
          </a>
        </li>
      </ul>
      <span className="text-xs font-light text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
        2023 • Gökhan Gündüz
      </span>
    </footer>
  );
}
