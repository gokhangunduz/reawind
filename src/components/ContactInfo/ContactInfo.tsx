import React, { ReactElement } from "react";
import {
  MdAlternateEmail,
  MdLocalPhone,
  MdLocationPin,
  MdWork,
} from "react-icons/md";

export default function Contact(): ReactElement {
  const items = [
    {
      title: "Email",
      url: "mailto:mail@gokhangunduz.com.tr",
      label: "mail@gokhangunduz.com.tr",
      icon: <MdAlternateEmail size={42} />,
    },
    {
      title: "Phone",
      url: "tel:+905555555555",
      label: "+90 555 555 55 55",
      icon: <MdLocalPhone size={42} />,
    },
    {
      title: "Address",
      url: "https://goo.gl/maps/4Z5Z9Z9Z9Z9Z9Z9Z9",
      label: "Ankara, Turkey",
      icon: <MdLocationPin size={42} />,
    },
    {
      title: "Freelance",
      url: "mailto:mail@gokhangunduz.com.tr",
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
