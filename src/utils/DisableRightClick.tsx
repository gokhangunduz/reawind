import { useEffect } from "react";

export default function DisableRightClick(): null {
  useEffect(() => {
    const handleContextmenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextmenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return null;
}
