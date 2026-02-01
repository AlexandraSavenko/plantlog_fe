import { Link } from "react-router-dom";
import css from "./VerifyEmailConfirm.module.css";

const VerifyEmailConfirm = () => {
  return (
    <div className={css.verifySuccess}>
      <h3>Thank you, your email has been verified</h3>
      <Link to={"/auth/signin"}>Sign in</Link>
    </div>
  );
};

export default VerifyEmailConfirm;
