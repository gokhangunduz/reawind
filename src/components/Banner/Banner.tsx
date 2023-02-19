import React, { ReactElement } from "react";

interface BannerProps {
  url?: string;
}

export default function Banner({ url }: BannerProps): ReactElement {
  return <img className="w-full h-full py-14 rounded-lg" src={url} alt={url} />;
}
