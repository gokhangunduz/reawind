import React, { useState } from "react";
import { SidebarContext } from "../context/SidebarContext";

export default function SidebarProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
