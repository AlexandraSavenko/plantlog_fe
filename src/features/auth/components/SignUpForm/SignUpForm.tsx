import { useSelector } from "react-redux";
import css from "./SignUpForm.module.css";
import { selectIsError } from "../../../../redux/auth/selectros";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import type { SignUpFormValues } from "../../models/types";
import { Formik, Form, type FormikHelpers } from "formik";
import TextInput from "../../../../shared/ui/Input/TextInput/TextInput";
import PasswordInput from "../../../../shared/ui/Input/PasswordInput/PasswordInput";
import Button from "../../../../shared/ui/Button/Button";
import Modal from "../../../../shared/ui/Modal/Modal";
import ErrorMessage from "../../../../shared/ui/ErrorMessage/ErrorMessage";
import { signup } from "../../../../redux/auth/operations";
import { SignUpSchema } from "../../models/signInSchema";
import { setErrorNull } from "../../../../redux/auth/slice";
import { useState } from "react";
import VerifyEmailMessage from "../../ui/VerifyEmailMessage/VerifyEmailMessage";

const SignupForm = () => {
  const error = useSelector(selectIsError);
  const [verifyModalOpen, setVerifyModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = async (
    values: SignUpFormValues,
    actions: FormikHelpers<SignUpFormValues>,
  ): Promise<void> => {
    console.log("submit")
    console.log(values)
    const { username, email, password } = values;
    const res = await dispatch(signup({ username, email, password }));
    if (signup.fulfilled.match(res)) {
      setVerifyModalOpen(true);
    }
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <Formik
        initialValues={{ username: "", email: "", password: "", confirm: "" }}
        onSubmit={handleSubmit}
        validationSchema={SignUpSchema}
      >
        <Form className={css.form}>
          <TextInput
            label={"Username"}
            name={"username"}
            type={"text"}
            placeholder={"Choose a name you like"}
            icon={"icon-email"}
          />
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
          <PasswordInput
            label={"Confirm password"}
            name={"confirm"}
            type={"password"}
            placeholder={"********"}
          />
          <Button label="Увійти" />
        </Form>
      </Formik>
      {error && (
            <Modal onClose={() => dispatch(setErrorNull())}>
              {<ErrorMessage />}
            </Modal>
          )}
          {verifyModalOpen && <Modal onClose={() => setVerifyModalOpen(false)}>{
            <VerifyEmailMessage/>
            }
            </Modal>}
    </div>
  );
};

export default SignupForm;
