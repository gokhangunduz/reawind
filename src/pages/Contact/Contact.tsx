import React, { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "./ContactForm";

export default function Contact(): ReactElement {
  const url = useLocation();

  console.log(url.pathname.slice(1));

  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Contact" subtitle="Gökhan Gündüz" />
      <div className="grid grid-cols-2">
        <div className="col-span-1">a</div>
        <div className="col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
