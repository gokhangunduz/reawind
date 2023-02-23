import React, { ReactElement } from "react";
import {
  MdAlternateEmail,
  MdLocalPhone,
  MdLocationPin,
  MdWork,
} from "react-icons/md";
import config from "../../templates/config.json";

export default function Contact(): ReactElement {
  const items = [
    {
      title: "Email",
      url: config.urls.email,
      label: config.email,
      icon: <MdAlternateEmail size={42} />,
    },
    {
      title: "Phone",
      url: config.urls.phone,
      label: config.phone,
      icon: <MdLocalPhone size={42} />,
    },
    {
      title: "Address",
      url: config.urls.address,
      label: config.address,
      icon: <MdLocationPin size={42} />,
    },
    {
      title: "Freelance",
      url: config.urls.email,
      label: "Freelance Available",
      icon: <MdWork size={42} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 h-full">
      {items.map((item: any) => (
        <div
          key={item.title}
          className="col-span-1 flex flex-col gap-3 items-center justify-center p-4  text-layer-dark-700 dark:text-layer-light-200  border border-layer-light-200 dark:border-layer-dark-700 shadow rounded"
        >
          {item.icon}
          <span className="font-semibold">{item.title}</span>
          <a
            target="_blank"
            rel="noreferrer"
            href={item.url}
            className="text-sm"
          >
            {item.label}
          </a>
        </div>
      ))}
    </div>
  );
}
