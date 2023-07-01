import React, { ReactElement, ReactNode, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

interface ISidebarProvider {
  children: ReactNode;
}

export default function SidebarProvider({
  children,
}: ISidebarProvider): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
