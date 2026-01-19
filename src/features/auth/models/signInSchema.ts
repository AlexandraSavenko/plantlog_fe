import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(/^[\x20-\x7E]+$/, "Email must use standard Latin characters")
    .email("This is not a valid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .trim()
    .min(8)
    .max(60)
    .required("Please enter your password"),
});