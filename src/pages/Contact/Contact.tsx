import React, { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Contact(): ReactElement {
  const url = useLocation();

  console.log(url.pathname.slice(1));

  return (
    <div className="animate__animated animate__zoomIn">
      <PageHeader title="Contact" subtitle="Gökhan Gündüz" />
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
      <div>contact</div>
    </div>
  );
}
