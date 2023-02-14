import React, { Fragment, ReactElement, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SidebarContext } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar/Sidebar";

export default function PublicLayout(): ReactElement {
  const { isOpen, setIsOpen }: any = useContext(SidebarContext);

  const handleSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Fragment>
      <div onClick={() => isOpen && handleSidebar()}>
        <Header />
        <Outlet />
        <Footer />
      </div>
      {isOpen && <Sidebar />}
    </Fragment>
  );
}
