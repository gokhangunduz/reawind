import React, { ReactElement } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Projects(): ReactElement {
  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Projects" subtitle="Gökhan Gündüz" />

      <h1>Projects</h1>
    </div>
  );
}
