import React, { ReactElement } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Resume(): ReactElement {
  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Resume" subtitle="Gökhan Gündüz" />

      <h1>Resume</h1>
    </div>
  );
}
