import React, { useContext, useEffect, useState } from "react";
import InputTextarea from "../../components/InputTextarea/InputTextarea";
import InputText from "../../components/InputText/InputText";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import Reaptcha from "reaptcha";
import { ThemeContext } from "../../context/ThemeContext";

export default function Contact(): React.ReactElement {
  const { theme }: any = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      verify: false,
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <InputText
            placeholder="First Name"
            {...formik.getFieldProps("firstName")}
          />
        </div>
        <div className="col-span-1">
          <InputText
            placeholder="Last Name"
            {...formik.getFieldProps("lastName")}
          />
        </div>
      </div>
      <div>
        <InputText
          placeholder="Email"
          type="email"
          {...formik.getFieldProps("email")}
        />
      </div>
      <div>
        <InputText placeholder="Subject" {...formik.getFieldProps("subject")} />
      </div>
      <div>
        <InputTextarea
          placeholder="Message"
          {...formik.getFieldProps("message")}
        />
      </div>
      <div>
        <Reaptcha
          theme={theme}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onVerify={(e: any) => {
            console.log(e);
          }}
        />
      </div>
      <div>
        <Button label="Send Message" />
      </div>
    </div>
  );
}
