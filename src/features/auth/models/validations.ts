import * as Yup from "yup";

const authBaseSchema = {
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
};
export const SignUpSchema = Yup.object().shape({
  username: Yup.string().trim().max(60).required("Please, write a user name"),
  ...authBaseSchema,
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please, confirm password"),
});
export const SignInSchema = Yup.object().shape({
  ...authBaseSchema,
});
