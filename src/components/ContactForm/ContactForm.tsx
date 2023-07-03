import React, { ReactElement, useContext, useRef } from "react";
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

export default function ContactForm(): ReactElement {
  const { theme } = useContext(ThemeContext);
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
    onSubmit: async (values, helpers) => {
      const sent = await sendEmail(values);

      if (sent) {
        helpers.resetForm();
        recaptcha.current?.reset();
      }
    },
  });

  const sendEmail = async (
    values: typeof formik.initialValues
  ): Promise<boolean> => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast("Information Notification", {
        description: "Contact form is not configured yet!",
      });
      return false;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        publicKey
      );
      toast("Information Notification", {
        description: "Your message has been sent successfully!",
      });
      return true;
    } catch (error) {
      toast("Information Notification", {
        description: "Your message has not been sent!",
      });
      return false;
    }
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
          label="Send Message"
          loading={formik.isSubmitting}
          disabled={!formik.isValid}
        />
      </div>
    </form>
  );
}
