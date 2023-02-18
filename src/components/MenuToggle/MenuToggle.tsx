import React, { FC, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarContext } from "../../contexts/SidebarContext";

export const MenuToggle: FC = () => {
  const { isOpen, setIsOpen }: any = useContext(SidebarContext);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      <RxHamburgerMenu
        size={28}
        className="animate__animated animate__fadeIn"
      />
    </div>
  );
};
