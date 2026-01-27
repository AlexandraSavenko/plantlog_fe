import { NavLink, useNavigate } from "react-router-dom";
import css from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn, selectUser } from "../../../redux/auth/selectros";
import { useAppDispatch } from "../../../hooks/useDispatch";
import { signout } from "../../../redux/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const isSignedIn = useSelector(selectIsSignedIn);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(signout())
    navigate("/")
  }
  return (
    <div className={`${css.header} container`}>
      {isSignedIn ? (
        <div>
          <p>{`Hello, ${user.username}`}</p>
          <NavLink to={"/"}>All plants</NavLink>
          <NavLink to={"/profile/own"}>My plants</NavLink>
          <button onClick={handleLogout}>Sign out</button>
        </div>
      ) : (
        <div>
          <NavLink to={"/auth/signin"}>Sign in</NavLink>
          <NavLink to={"/auth/signup"}>Sign up</NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
