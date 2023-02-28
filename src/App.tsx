import React, { Fragment, ReactElement, useContext, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import DisableRightClick from "./utils/DisableRightClick";
import { Toaster } from "sonner";
import "animate.css";
import { ThemeContext } from "./contexts/ThemeContext";
import { renderCanvas } from "./helper/Canvas/Canvas";

export default function App(): ReactElement {
  const { theme }: any = useContext(ThemeContext);

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <Fragment>
      <Toaster theme={theme} position="bottom-right" />
      <DisableRightClick />
      <AppRoutes />
      <canvas
        className="bg-skin-base pointer-events-none fixed inset-0 w-screen h-screen"
        id="canvas"
      />
    </Fragment>
  );
}
