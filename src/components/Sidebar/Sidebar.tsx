import { Link } from "react-router-dom";
import { ReactElement, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import packageJSON from "../../../package.json";
import FooterItems from "../FooterItems/FooterItems";
import { info } from "../../templates/template";

export default function Sidebar(): ReactElement {
  const { theme }: any = useContext(ThemeContext);

  const urls = [
    { url: "/", name: "Intro" },
    { url: "/resume", name: "Resume" },
    { url: "/projects", name: "Projects" },
    { url: "/blog", name: "Blog" },
    { url: "/contact", name: "Contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-between fixed h-screen w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4 top-0 right-0 p-10 bg-layer-light-50 dark:bg-layer-dark-900  border-l border-layer-light-100 dark:border-layer-dark-700 shadow-lg animate__animated animate__fadeInRight animate__faster">
      <img
        className="w-28 h-28"
        src={`/svg/logo-${theme === "light" ? "dark" : "light"}.svg`}
        alt="logo"
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
        <FooterItems />
        <span className="text-xs font-light text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
          {info.year} • {info.fullName}
        </span>
        <span className="text-xs font-light text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
          {packageJSON.version + "v"} {process.env.NODE_ENV}
        </span>
      </div>
    </div>
  );
}
