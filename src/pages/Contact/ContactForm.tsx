import React, { ReactElement, useContext, useRef } from "react";
import InputTextarea from "../../components/InputTextarea/InputTextarea";
import InputText from "../../components/InputText/InputText";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import Reaptcha from "reaptcha";
import { ThemeContext } from "../../contexts/ThemeContext";
import { contactFormSchema } from "../../validations/ValidationSchemas";
import InputError from "../../components/InputError/InputError";

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
        formik.resetForm();
        recaptcha.current?.reset();
        formik.setSubmitting(false);
      }, 3000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
      </div>
      <div>
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
      <div style={{ width: "fit-content" }}>
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
      <div>
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
