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
import { SidebarContext } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar/Sidebar";
import LoadingBar from "react-top-loading-bar";
import { ThemeContext } from "../context/ThemeContext";
// @ts-ignore
import ReactCursorEffect from "react-dancing-lines";

export default function MainLayout(): ReactElement {
  const { isOpen, setIsOpen }: any = useContext(SidebarContext);
  const [progress, setProgress] = useState(0);
  const { theme }: any = useContext(ThemeContext);
  const url = useLocation();

  useEffect(() => {
    handleSidebar();
    setProgress(50);
    setTimeout(() => setProgress(100), 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const handleSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  console.log("AAA", theme);

  return (
    <Fragment>
      {theme === "dark" && (
        <ReactCursorEffect backgroundColor={"rgba(0, 0, 0, 1)"} />
      )}
      <div
        className={`${isOpen && "cursor-pointer"}`}
        onClick={() => isOpen && handleSidebar()}
      >
        <Header />
        <div
          className="px-6 lg:px-48 xl:px-80 2xl:px-[25rem]"
          style={{ minHeight: "calc(100vh - 14rem)" }}
        >
          <Outlet />
        </div>
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
