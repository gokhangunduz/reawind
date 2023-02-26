import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SidebarProvider from "./providers/SidebarProvider";
import ThemeProvider from "./providers/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SidebarProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SidebarProvider>
);
