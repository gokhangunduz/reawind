import React, { FC, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarContext } from "../../contexts/SidebarContext";

export const MenuToggle: FC = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer"
    >
      <RxHamburgerMenu
        size={28}
        className="animate__animated animate__fadeIn"
      />
    </button>
  );
};
