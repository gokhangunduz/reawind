import { createContext } from "react";

export interface ISidebarContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<ISidebarContext>({
  isOpen: false,
  setIsOpen: () => undefined,
});
