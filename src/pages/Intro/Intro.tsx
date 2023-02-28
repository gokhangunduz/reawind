import React, { Fragment, ReactElement } from "react";
import { info, pages } from "../../templates/template";
import ReactHelmet from "../../helper/ReactHelmet/ReactHelmet";

export default function Intro(): ReactElement {
  return (
    <Fragment>
      <ReactHelmet
        title={pages.intro.seo.title}
        description={pages.intro.seo.description}
        keywords={pages.intro.seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
      />
      <div
        style={{ height: "calc(100vh - 14rem)" }}
        className="h-full flex flex-col items-center justify-center xs:gap-4 sm:gap-6 md:gap-8 xl:gap-10 animate__animated animate__zoomIn animate__slow"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-center font-bold text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
          {info.fullName}
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold text-layer-dark-600 dark:text-layer-light-100 transition-all duration-500">
          {info.title}
        </h3>
      </div>
    </Fragment>
  );
}
