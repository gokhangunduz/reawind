import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import ThemeContext from "./context/ThemeContext";
import SidebarContext from "./context/SidebarContext";
import "animate.css";

function App() {
  return (
    <>
      <SidebarContext>
        <ThemeContext>
          <AppRoutes />
        </ThemeContext>
      </SidebarContext>
    </>
  );
}

export default App;
