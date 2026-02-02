import { Link, useSearchParams } from "react-router-dom";
import css from "./VerifyEmailConfirm.module.css";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { useEffect } from "react";
import { verifyEmail } from "../../../../redux/auth/operations";

const VerifyEmailConfirm = () => {
  const [searchParams] = useSearchParams();
  console.log("search params", searchParams)
  const dispatch = useAppDispatch();
  const token = searchParams.get("token")
  console.log("token", token)
  useEffect(() => {
    if(token){
      dispatch(verifyEmail(token))
    }
  }, [token])
  return (
    <div className={css.verifySuccess}>
      <h3>Thank you, your email has been verified</h3>
      <Link to={"/auth/signin"}>Sign in</Link>
    </div>
  );
};

export default VerifyEmailConfirm;
