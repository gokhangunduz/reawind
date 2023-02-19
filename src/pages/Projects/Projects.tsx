import React, { ReactElement, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Projects(): ReactElement {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios(`/project/projects.json`).then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Projects" subtitle="Gökhan Gündüz" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 text-layer-light-100 ">
        {projects.map((project: any, index: number) => (
          <Link to={`/projects/${project.name}`}>
            <div
              key={index}
              className="relative col-span-1 border border-layer-light-600 dark:border-layer-dark-700 shadow-lg rounded-lg hover:scale-105 transition-all duration-500"
            >
              <img
                className="rounded-lg"
                src={`/project/image/${project.name}.png`}
                alt={project.title}
              />
              <div className="absolute flex flex-col gap-2 items-center bottom-5 left-1/2 transform -translate-x-1/2">
                <span className="text-sm font-medium">{project.title}</span>

                <span className="text-xs font-light">{project.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
