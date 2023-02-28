import React, { Fragment, ReactElement } from "react";

export default function Canvas(): ReactElement {
  return (
    <Fragment>
      <canvas
        className="bg-skin-base pointer-events-none fixed inset-0 w-screen h-screen"
        id="canvas"
      />
    </Fragment>
  );
}
