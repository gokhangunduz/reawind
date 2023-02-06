import React, { FC } from "react";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";

export const Footer: FC = () => {
  return (
    <footer className="h-12 flex items-center justify-center">
      <ul className="flex gap-4 items-center justify-center dark:text-layer-50 animate__animated animate__fadeInUp">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gokhangunduz"
          >
            <SlSocialGithub size={24} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/iamgokhangunduz"
          >
            <SlSocialLinkedin size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
