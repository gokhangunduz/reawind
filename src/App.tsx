import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import ThemeContext from "./context/ThemeContext";
import SidebarContext from "./context/SidebarContext";
import "animate.css";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <>
      <SidebarContext>
        <ThemeContext>
          <LoadingBar
            height={4}
            color={`#00ffe2`}
            progress={progress}
            shadow={true}
          />
          <AppRoutes />
        </ThemeContext>
      </SidebarContext>
    </>
  );
}

export default App;
