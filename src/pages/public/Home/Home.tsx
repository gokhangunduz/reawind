import React, { FC, useContext } from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import { ThemeContext } from "../../../context/ThemeContext";
export const Home: FC = () => {
  const { theme }: any = useContext(ThemeContext);
  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => (theme === "light" ? "" : "#61dafb"),
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2
      );
    },
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 8rem)" }}
      className="flex flex-col gap-2 text-center items-center justify-center bg-layer-50 dark:bg-layer-900 transition-all duration-500"
    >
      <ParticleImage
        className="mb-40 animate__animated animate__zoomIn"
        src={"/image/gg-dark.png"}
        width={512}
        height={512}
        scale={0.36}
        entropy={20}
        maxParticles={2000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="transparent"
      />
      <div className="flex flex-col gap-3 absolute mt-44 animate__animated animate__fadeInUp">
        <h1 className="text-5xl font-semibold dark:text-layer-50">
          Gökhan Gündüz
        </h1>
        <h2 className="text-xl font-medium dark:text-primary">
          Frontend Developer
        </h2>
      </div>
    </div>
  );
};
