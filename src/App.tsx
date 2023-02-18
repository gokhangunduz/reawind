import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ThemeProvider from "./providers/ThemeProvider";
import SidebarProvider from "./providers/SidebarProvider";
import DisableRightClick from "./utils/DisableRightClick";
import "animate.css";

function App() {
  return (
    <>
      <SidebarProvider>
        <ThemeProvider>
          <DisableRightClick />
          <AppRoutes />
        </ThemeProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
