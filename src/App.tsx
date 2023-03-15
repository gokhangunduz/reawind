import React, { Fragment, ReactElement, useContext, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import DisableRightClick from "./utils/DisableRightClick";
import { ThemeContext } from "./contexts/ThemeContext";
import { renderCanvas } from "./helper/Canvas/Canvas";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Canvas from "./components/Canvas/Canvas";
import { Toaster } from "sonner";
import "animate.css";

export default function App(): ReactElement {
  const { theme }: any = useContext(ThemeContext);
  const { width }: any = useWindowDimensions();

  useEffect(() => {
    if (width > 768) {
      renderCanvas();
    }
  }, [width]);

  return (
    <Fragment>
      <Toaster theme={theme} position="bottom-right" />
      <DisableRightClick />
      <AppRoutes />
      {width > 768 && <Canvas />}
    </Fragment>
  );
}
