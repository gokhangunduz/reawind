import React, { Fragment, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import ListLayout from "../../layouts/ListLayout";
import GridItem from "../../components/GridItem/GridItem";

export default function Projects(): ReactElement {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios(`/data/project/projects.json`).then((res) => {
      setProjects(res.data || []);
    });
  }, []);

  return (
    <ListLayout pageHeaderTitle="Projects">
      <Fragment>
        {projects?.map((project: any, index: number) => (
          <GridItem key={index} type="project" item={project} />
        ))}
      </Fragment>
    </ListLayout>
  );
}
