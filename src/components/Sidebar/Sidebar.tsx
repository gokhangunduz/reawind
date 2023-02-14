import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";
import { useContext } from "react";

export default function Sidebar() {
  const { isOpen, setIsOpen }: any = useContext(SidebarContext);

  return (
    <div className="flex flex-col fixed h-screen w-72 top-0 right-0 bg-layer-light-50 dark:bg-layer-dark-900 border-l border-layer-light-100 dark:border-layer-dark-800 shadow-lg animate__animated animate__fadeInRight">
      <Link to={"/resume"}>Resume</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
}
