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

export default function PublicLayout(): ReactElement {
  const { isOpen, setIsOpen }: any = useContext(SidebarContext);
  const [progress, setProgress] = useState(0);
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

  return (
    <Fragment>
      <div
        className={`${isOpen && "cursor-pointer"}`}
        onClick={() => isOpen && handleSidebar()}
      >
        <Header />
        <div style={{ minHeight: "calc(100vh - 9rem)" }}>
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
