import React, { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Blog(): ReactElement {
  const url = useLocation();

  useEffect(() => {
    fetch(`/post/${url.pathname}`);
  });

  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
