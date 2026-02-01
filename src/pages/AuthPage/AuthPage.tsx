import { useParams } from "react-router-dom";
import css from "./AuthPage.module.css";
import SigninForm from "../../features/auth/components/SignInForm/SignInForm";
import SignUpForm from "../../features/auth/components/SignUpForm/SignUpForm";
import VerifyEmailConfirm from "../../features/auth/ui/VerifyEmailConfirm/VerifyEmailConfirm";

const AuthPage = () => {
  const { authType } = useParams();
  return (
    <div className={css.authPage}>
      <div className={css.glassBox}>
        {authType === "signin" && <SigninForm />}
        {authType === "signup" && <SignUpForm />}
        {authType === "verify" && <VerifyEmailConfirm />}
      </div>
    </div>
  );
};

export default AuthPage;
