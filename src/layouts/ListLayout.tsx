import React, { ReactElement } from "react";
import PageHeader from "../components/PageHeader/PageHeader";

interface IListLayout {
  children: ReactElement;
  pageHeaderTitle: string;
}

export default function ListLayout({
  children,
  pageHeaderTitle,
}: IListLayout): ReactElement {
  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title={pageHeaderTitle} />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16 text-layer-light-100 ">
        {children}
      </div>
    </div>
  );
}
