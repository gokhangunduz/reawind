import React, { ReactElement } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

export default function Contact(): ReactElement {
  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Contact" subtitle="Gökhan Gündüz" />
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 md:gap-20">
        <div className="col-span-1">
          <ContactInfo />
        </div>
        <div className="col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
