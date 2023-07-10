import React, { Fragment, ReactElement } from "react";
import GridItem from "../../components/GridItem/GridItem";
import ListLayout from "../../layouts/ListLayout";
import { projects } from "../../templates/projects";
import { info, pages } from "../../templates/template";
import ReactHelmet from "../../helper/ReactHelmet/ReactHelmet";
import { sortByDate } from "../../utils/sortByDate";

export default function Projects(): ReactElement {
  return (
    <Fragment>
      <ReactHelmet
        title={pages.projects.seo.title}
        description={pages.projects.seo.description}
        keywords={pages.projects.seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
      />
      <ListLayout pageHeaderTitle="Projects">
        <Fragment>
          {sortByDate(projects).map((project) => (
            <GridItem
              key={project.url}
              type="project"
              url={project.url}
              title={project.title}
              imageFileName={project.imageFileName}
            />
          ))}
        </Fragment>
      </ListLayout>
    </Fragment>
  );
}
