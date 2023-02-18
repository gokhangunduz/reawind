import React, { ReactElement } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";

export default function Blog(): ReactElement {
  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Blog" subtitle="Gökhan Gündüz" />

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <Link to={`/blog/test`}>test</Link>
        </div>
      </div>
    </div>
  );
}
