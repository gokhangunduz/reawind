import React, { Fragment, ReactElement, useContext, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import DisableRightClick from "./utils/DisableRightClick";
import { ThemeContext } from "./contexts/ThemeContext";
import { renderCanvas } from "./helper/Canvas/Canvas";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Canvas from "./components/Canvas/Canvas";
import { Toaster } from "sonner";
import "animate.css";

const CANVAS_MIN_WIDTH = 768;

export default function App(): ReactElement {
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const showCanvas = width > CANVAS_MIN_WIDTH;

  useEffect(() => {
    if (!showCanvas) return;

    return renderCanvas();
  }, [showCanvas]);

  return (
    <Fragment>
      <Toaster theme={theme} position="bottom-right" />
      <DisableRightClick />
      <AppRoutes />
      {showCanvas && <Canvas />}
    </Fragment>
  );
}
