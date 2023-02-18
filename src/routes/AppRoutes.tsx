import React, { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Intro from "../pages/Intro/Intro";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import Post from "../pages/Blog/Post/Post";

export default function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:post" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
