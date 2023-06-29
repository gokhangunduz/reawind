import { useEffect, useState } from "react";

export interface IWindowDimensions {
  width: number;
  height: number;
}

const getDimensions = (): IWindowDimensions => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export default function useWindowDimensions(): IWindowDimensions {
  const [windowSize, setWindowSize] =
    useState<IWindowDimensions>(getDimensions);

  useEffect(() => {
    const handleResize = () => setWindowSize(getDimensions());

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
