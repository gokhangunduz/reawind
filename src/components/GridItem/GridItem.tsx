import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface GridItemProps {
  key: number;
  item: any;
  type: string;
}

export default function GridItem({
  key,
  item,
  type,
}: GridItemProps): ReactElement {
  return (
    <Link key={key} to={`/${type}/${item.name}`}>
      <div className="relative col-span-1 border border-layer-light-600 dark:border-layer-dark-700 shadow-lg rounded-lg hover:scale-105 transition-all duration-500">
        <img
          className="rounded-lg"
          src={`/data/${type}/image/${item.name}.png`}
          alt={item.title}
        />
        <div className="absolute flex flex-col gap-2 items-center bottom-5 left-1/2 transform -translate-x-1/2">
          <span className="text-base font-medium">{item.title}</span>
        </div>
      </div>
    </Link>
  );
}
