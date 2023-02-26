import React, { Fragment, ReactElement } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { info, pages } from "../../templates/template";
import ReactHelmet from "../../helper/ReactHelmet";

export default function Contact(): ReactElement {
  return (
    <Fragment>
      <ReactHelmet
        title={pages.contact.seo.title}
        description={pages.contact.seo.description}
        keywords={pages.contact.seo.keywords}
        author={info.fullName}
        contact={info.email}
        copyright={info.fullName}
      />
      <div className="animate__animated animate__zoomIn">
        <PageHeader title="Contact" />
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 md:gap-20">
          <div className="col-span-1">
            <ContactInfo />
          </div>
          <div className="col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
