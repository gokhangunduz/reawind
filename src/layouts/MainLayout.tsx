import React, {
  Fragment,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SidebarContext } from "../contexts/SidebarContext";
import Sidebar from "../components/Sidebar/Sidebar";
import LoadingBar from "react-top-loading-bar";

export default function MainLayout(): ReactElement {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
    setProgress(50);

    const timer = setTimeout(() => setProgress(100), 100);

    return () => clearTimeout(timer);
  }, [location, setIsOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <Fragment>
      <div
        className={isOpen ? "cursor-pointer" : undefined}
        onClick={() => isOpen && setIsOpen(false)}
      >
        <Header />
        <main
          className="px-6 lg:px-48 xl:px-80 2xl:px-[25rem]"
          style={{ minHeight: "calc(100vh - 14rem)" }}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
      {isOpen && <Sidebar />}
      <LoadingBar
        height={2}
        color={`#00ffe2`}
        progress={progress}
        shadow={true}
        transitionTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
    </Fragment>
  );
}
