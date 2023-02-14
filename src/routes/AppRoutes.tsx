import React, { Fragment, ReactElement, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/public/Home";
import Blog from "../pages/public/Blog";
import Contact from "../pages/public/Contact";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarContext } from "../context/SidebarContext";

export default function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
