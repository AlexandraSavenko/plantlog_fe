import { Link, NavLink, useNavigate } from "react-router-dom";
import css from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn, selectUser } from "../../../redux/auth/selectros";
import { useAppDispatch } from "../../../hooks/useDispatch";
import { signout } from "../../../redux/auth/operations";
import { useState } from "react";
import Modal from "../Modal/Modal";
import GoogleLoginButton from "../../../features/auth/ui/GoogleAuthButton/GoogleAuthButton";

const Header = () => {
  const [signModalOpen, setSignModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const isSignedIn = useSelector(selectIsSignedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(signout());
    navigate("/");
  };
  return (
    <div className={`${css.header} container`}>
      <NavLink
        className={({ isActive }) =>
          `${isActive && css.activeLink} ${css.link}`
        }
        to={"/"}
      >
        All plants
      </NavLink>
      {isSignedIn ? (
        <div>
          <p>{`Hello, ${user.username}`}</p>

          <NavLink
            className={({ isActive }) =>
              `${isActive && css.activeLink} ${css.link}`
            }
            to={"/profile/own"}
          >
            My plants
          </NavLink>
          <button onClick={handleLogout}>Sign out</button>
        </div>
      ) : (
        <div className={css.authWrap}>
          <button onClick={() => setSignModalOpen(true)}>
            <svg className={css.icon}>
              <use href={"/icons.svg#icon-sign"}></use>
            </svg>
          </button>
        </div>
      )}
      {signModalOpen && (
        <Modal onClose={() => setSignModalOpen(false)}>
          <Link onClick={() => setSignModalOpen(false)}
            className={css.authLink}
            to={"/auth/signin"}
          >
            Sign in
          </Link>
          <Link onClick={() => setSignModalOpen(false)}
            className={css.authLink}
            to={"/auth/signup"}
          >
            Sign up
          </Link>
          <GoogleLoginButton/>
        </Modal>
      )}
    </div>
  );
};

export default Header;
