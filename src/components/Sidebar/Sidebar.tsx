import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Sidebar() {
  const { theme }: any = useContext(ThemeContext);

  const urls = [
    { url: "/", name: "Home" },
    { url: "/resume", name: "Resume" },
    { url: "/project", name: "Projects" },
    { url: "/blog", name: "Blog" },
    { url: "/contact", name: "Contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-between fixed h-screen w-72 top-0 right-0 p-10 bg-layer-light-50 dark:bg-layer-dark-900 border-l border-layer-light-100 dark:border-layer-dark-800 shadow-lg animate__animated animate__fadeInRight animate__faster">
      <img
        className="w-28 h-28"
        src={`/svg/gokhangunduz-${theme === "light" ? "dark" : "light"}.svg`}
        alt="gokhangunduz"
      />

      <ul className="flex flex-col gap-4">
        {urls.map((url) => (
          <li key={url.name}>
            <Link
              className="text-xl font-semibold text-layer-dark-900 dark:text-layer-light-50 hover:underline hover:underline-offset-4 transition-all duration-500"
              to={url.url}
            >
              {url.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-4">
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
      </div>
    </div>
  );
}
