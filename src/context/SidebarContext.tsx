import React, { createContext, useState } from "react";

export const SidebarContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
