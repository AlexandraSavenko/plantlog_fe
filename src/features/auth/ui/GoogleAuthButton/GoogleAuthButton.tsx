import { useGoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { signWithGoogle } from "../../../../redux/auth/operations";
import css from "./GoogleAuthButton.module.css"


const GoogleLoginButton = () => {
    const dispatch = useAppDispatch()
  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: ({ code }) => {
      // send code to backend
    dispatch(signWithGoogle(code))
    },
    onError: () => {
      console.error("Google login failed");
    },

  });
  return (<>
  <button className={css.googleBtn} type="button" onClick={() => login()}>Use Google</button>
  </>
    
  );
}

export default GoogleLoginButton