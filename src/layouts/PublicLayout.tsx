import React from "react";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
