import React, { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects/Projects";
import Project from "../pages/Projects/Project";
import MainLayout from "../layouts/MainLayout";
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume/Resume";
import Post from "../pages/Blog/Post/Post";
import Intro from "../pages/Intro/Intro";
import Blog from "../pages/Blog/Blog";

export default function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:post" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
