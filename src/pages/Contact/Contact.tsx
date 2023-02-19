import React, { ReactElement } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "./ContactForm";

export default function Contact(): ReactElement {
  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Contact" subtitle="Gökhan Gündüz" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1">info</div>
        <div className="col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
