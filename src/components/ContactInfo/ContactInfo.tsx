import React, { ReactElement } from "react";
import {
  MdAlternateEmail,
  MdLocalPhone,
  MdLocationPin,
  MdWork,
} from "react-icons/md";
import { info, urls } from "../../templates/template";

export default function Contact(): ReactElement {
  const items = [
    {
      title: "Email",
      url: urls.email,
      label: info.email,
      icon: <MdAlternateEmail size={42} />,
    },
    {
      title: "Phone",
      url: urls.phone,
      label: info.phone,
      icon: <MdLocalPhone size={42} />,
    },
    {
      title: "Address",
      url: urls.address,
      label: info.address,
      icon: <MdLocationPin size={42} />,
    },
    {
      title: "Freelance",
      url: urls.email,
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
