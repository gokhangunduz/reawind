import React, { Fragment, useContext } from "react";
import AppRoutes from "./routes/AppRoutes";
import DisableRightClick from "./utils/DisableRightClick";
import { Toaster } from "sonner";
import "animate.css";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme }: any = useContext(ThemeContext);

  return (
    <Fragment>
      <Toaster theme={theme} position="bottom-right" />
      <DisableRightClick />
      <AppRoutes />
    </Fragment>
  );
}

export default App;
