import { Formik, Form, type FormikHelpers } from "formik";
import css from "./SigninForm.module.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signin } from "../../../../redux/auth/operations";
import type { AppDispatch } from "../../../../redux/store";
import { SignInSchema } from "../../models/signInSchema";
import type { AuthFormValues } from "../../models/types";
import TextInput from "../../../../shared/ui/TextInput/TextInput";
import ErrorMessage from "../../../../shared/ui/ErrorMessage/ErrorMessage";
import Modal from "../../../../shared/ui/Modal/Modal";
import { setErrorNull } from "../../../../redux/auth/slice";
import { selectIsError } from "../../../../redux/auth/selectros";
import Button from "../../../../shared/ui/Button/Button";


const SigninForm = () => {
  const error = useSelector(selectIsError);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (
    values: AuthFormValues,
    actions: FormikHelpers<AuthFormValues>
  ): Promise<void> => {
    const res = await dispatch(signin(values));
    if (signin.fulfilled.match(res)) {
      navigate("/profile/own");
    }
    actions.resetForm();
  };

  return (<div className={css.formWrap}>
  <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={SignInSchema}
    >
      <Form className={css.form}>
        <TextInput
          label={"Email"}
          name={"email"}
          type={"email"}
          placeholder={"your@email.com"}
          icon={"icon-email"}
        />
        <TextInput
          label={"Password"}
          name={"password"}
          type={"text"}
          placeholder={"********"}
          icon={"icon-email-svg-repo"}
        />
        <Button label="Увійти" />
        {(error &&
          <Modal onClose={() => dispatch(setErrorNull())}>{<ErrorMessage />}</Modal>
        )}
      </Form>
    </Formik>
    <Link className={css.forgotPassword} to="/">
          Забули пароль?
        </Link>
  </div>
    
  );
};

export default SigninForm;