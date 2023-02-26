import React, { ReactElement, useContext, useEffect, useRef } from "react";
import InputTextarea from "../InputTextarea/InputTextarea";
import InputText from "../InputText/InputText";
import { useFormik } from "formik";
import Button from "../Button/Button";
import Reaptcha from "reaptcha";
import { ThemeContext } from "../../contexts/ThemeContext";
import { contactFormSchema } from "../../validations/ValidationSchemas";
import InputError from "../InputError/InputError";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact(): ReactElement {
  const { theme }: any = useContext(ThemeContext);
  const recaptcha = useRef<Reaptcha>(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      verify: false,
    },
    validationSchema: contactFormSchema,
    onSubmit: (values: any) => {
      formik.setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        sendEmail({
          message: values,
        });
        formik.resetForm();
        recaptcha.current?.reset();
        formik.setSubmitting(false);
      }, 5000);
    },
  });

  const sendEmail = (e: any) => {
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          email: formik.values.email,
          subject: formik.values.subject,
          message: formik.values.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Information Notification", {
            description: "Your message has been sent successfully!",
          });
        },
        (error) => {
          console.log(error.text);
          toast("Information Notification", {
            description: "Your message has not been sent!",
          });
        }
      );
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-7"
    >
      <div className="col-span-1">
        <InputText
          placeholder="First Name"
          disabled={formik.isSubmitting}
          {...formik.getFieldProps("firstName")}
        />
        <InputError
          touched={formik.touched.firstName}
          error={formik.errors.firstName}
        />
      </div>
      <div className="col-span-1">
        <InputText
          placeholder="Last Name"
          disabled={formik.isSubmitting}
          {...formik.getFieldProps("lastName")}
        />
        <InputError
          touched={formik.touched.lastName}
          error={formik.errors.lastName}
        />
      </div>
      <div className="col-span-1">
        <InputText
          placeholder="Subject"
          disabled={formik.isSubmitting}
          {...formik.getFieldProps("subject")}
        />
        <InputError
          touched={formik.touched.subject}
          error={formik.errors.subject}
        />
      </div>
      <div className="col-span-1">
        <InputText
          placeholder="Email"
          type="email"
          disabled={formik.isSubmitting}
          {...formik.getFieldProps("email")}
        />
        <InputError
          touched={formik.touched.email}
          error={formik.errors.email}
        />
      </div>
      <div className="col-span-1 md:col-span-2">
        <InputTextarea
          placeholder="Message"
          disabled={formik.isSubmitting}
          {...formik.getFieldProps("message")}
        />
        <InputError
          touched={formik.touched.message}
          error={formik.errors.message}
        />
      </div>
      <div
        className="col-span-1 md:col-span-2"
        style={{ width: "fit-content" }}
      >
        <Reaptcha
          ref={recaptcha}
          theme={theme}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onVerify={() => {
            formik.setFieldValue("verify", true);
          }}
          onExpire={() => {
            formik.setFieldValue("verify", false);
          }}
        />
        <InputError touched={true} error={formik.errors.verify} />
      </div>
      <div className="col-span-1 md:col-span-2">
        <Button
          {...formik.getFieldProps("submit")}
          label="Send Message"
          loading={formik.isSubmitting}
          disabled={!formik.isValid}
        />
      </div>
    </form>
  );
}
