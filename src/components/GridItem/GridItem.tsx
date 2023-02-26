import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface GridItemProps {
  url: string;
  type: string;
  title: string;
  imageFileName: string;
}

export default function GridItem({
  url,
  type,
  title,
  imageFileName,
}: GridItemProps): ReactElement {
  return (
    <Link to={`/${type}/${url}`}>
      <div className="relative col-span-1 border border-layer-light-600 dark:border-layer-dark-700 shadow-lg rounded-lg hover:scale-105 transition-all duration-500">
        <img className="rounded-lg" src={`/image/${imageFileName}`} alt={url} />
        <div className="absolute flex flex-col gap-2 items-center bottom-5 left-1/2 transform -translate-x-1/2">
          <span className="text-base font-medium">{title}</span>
        </div>
      </div>
    </Link>
  );
}
