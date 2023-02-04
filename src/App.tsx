import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import ThemeContext from "./context/ThemeContext";
import "animate.css";

function App() {
  return (
    <>
      <ThemeContext>
        <AppRoutes />
      </ThemeContext>
    </>
  );
}

export default App;
