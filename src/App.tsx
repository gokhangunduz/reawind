import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ThemeContext from "./context/ThemeContext";
import Sidebar from "./components/Sidebar/Sidebar";
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
