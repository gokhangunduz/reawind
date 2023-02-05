import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const PublicLayout: FC = () => {
  return (
    <div>
      <div className="sticky w-full top-0">
        <Header />
      </div>
      <div style={{ minHeight: "calc(100vh - 8rem)" }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
