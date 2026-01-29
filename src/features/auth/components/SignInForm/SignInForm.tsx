import { Formik, Form, type FormikHelpers } from "formik";
import css from "./SigninForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signin } from "../../../../redux/auth/operations";
import { SignInSchema } from "../../models/signInSchema";
import type { AuthFormValues } from "../../models/types";
import TextInput from "../../../../shared/ui/Input/TextInput/TextInput";
import ErrorMessage from "../../../../shared/ui/ErrorMessage/ErrorMessage";
import Modal from "../../../../shared/ui/Modal/Modal";
import { setErrorNull } from "../../../../redux/auth/slice";
import { selectIsError } from "../../../../redux/auth/selectros";
import Button from "../../../../shared/ui/Button/Button";
import PasswordInput from "../../../../shared/ui/Input/PasswordInput/PasswordInput";
import { useAppDispatch } from "../../../../hooks/useDispatch";

const SigninForm = () => {
  const error = useSelector(selectIsError);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async (
    values: AuthFormValues,
    actions: FormikHelpers<AuthFormValues>,
  ): Promise<void> => {
    const res = await dispatch(signin(values));
    if (signin.fulfilled.match(res)) {
      navigate("/profile/own");
    }
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
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
          <PasswordInput
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"********"}
          />
          <Button label="Увійти" />
          {error && (
            <Modal onClose={() => dispatch(setErrorNull())}>
              {<ErrorMessage />}
            </Modal>
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
