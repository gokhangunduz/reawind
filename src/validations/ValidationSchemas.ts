import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  verify: Yup.boolean().oneOf([true], "Verify is required"),
});
